from flask import Flask
from flask import request
import pymongo
from bson import ObjectId
import pandas as pd
import sys
sys.path.append(".")
from pyds import MassFunction
from itertools import product

bpa_data = pd.read_csv(r'./bpa_conf_full.csv')
bpa_data.set_index('A/C', inplace=True)

def DSS(input_arr, bpa_data):
    test = pd.read_csv(r'./allergy_test.csv')
    temp_test = test.iloc[:,:-1]
    list_col = list(temp_test.columns)
    df = bpa_data
    x_test = input_arr
    c=0
    test_bpa_single = []
    for a in x_test:
        if(c == len(list_col)):
            break
        if(str(a)=='KR'): 
            c+=1
            continue
        else: 
            s = str(list_col[c])+" "+str(a)
            if(s in df.index):
                for i in range(len(df.loc[s])):
                    if(df.loc[s][i]==0): df.loc[s][i]+=0.0001
                test_bpa_single.append(dict(df.loc[s]))
            else:
                test_bpa_single.append(dict(pd.Series([0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001], index=['R', 'O', 'N', 'RU', 'U', 'UO', 'RO'], name=s)))
            c += 1            
    initial = MassFunction(test_bpa_single[0])
    for i in range(1, len(test_bpa_single)):
        initial = initial&MassFunction(test_bpa_single[i])        
    return str(initial)

app = Flask(__name__)

@app.route('/predict', methods=['GET', 'POST'])
def index():
    client = pymongo.MongoClient("mongodb+srv://medical:07wThdmDuzg202z8@cluster0.hbrud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    db = client["myFirstDatabase"]
    col = db["patients"]
    x = col.find_one({"_id": ObjectId(request.get_json()["id"])})
    for i in x:
        if x[i] == '':
            if i == "runningnose" or i == "sneeze" or i == "cough" or i == "wheeze" or i == "headache" or i == "itch" or i == "swell" or i == "redrashes" or i == "familyhistory":
                x[i] = "NO"
            elif i != "_id" and i != "name" and i != "phone" and i !="email" and i != "address" and i != "age" and i != "gender" and i != "__v":
                x[i] = "KR"
    input_dss = list(x.values())[7:-1] + [list(x.values())[6]]
    if input_dss[-1] == 'Male':
        input_dss[-1] = 'M'
    elif input_dss[-1] == 'Female':
        input_dss[-1] = 'F'
    answer = DSS(input_dss, bpa_data)
    return answer

if __name__ == "__main__":
	app.run(host = "0.0.0.0", debug = True)
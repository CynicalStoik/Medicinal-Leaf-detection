import numpy as np
import os
from flask import Flask,app,request,render_template
from tensorflow.keras import models
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.python.ops.gen_array_ops import concat
from tensorflow.keras.applications.inception_v3 import preprocess_input
from flask import Flask,app,request,render_template,redirect,url_for
from flask_cors import CORS,cross_origin

modeln = load_model(r"Medly.h5")
modelo = load_model(r"Leaves.h5")
app=Flask(__name__)

cors=CORS(app)
app.config['CORS_HEADERS']='Content-Type'

@app.route('/result1',methods=["GET","POST"])
@cross_origin()
def nres():
    if request.method=="POST":
        f=request.files['image']
        basepath=os.path.dirname(__file__)
        filepath=os.path.join(basepath, 'templates\\src\\uploads', f.filename)
        f.save(filepath)
        img=image.load_img(filepath,target_size=(224,224))
        x=image.img_to_array(img)
        x=np.expand_dims(x, axis=0)
        img_data=preprocess_input(x)
        prediction=np.argmax(modeln.predict(img_data))
        index=['Aloevera','Amla','Amruthaballi','Arali','ashoka','Badipala','Balloon_Vine','Bamboo','Beans','Betel','Bhrami','Bringaraja','Castor','Catharanthus','Chilli','Citron lime (herelikai)','Coffee','Coriender','Curry','Eucalyptus','Gasagase','Ginger','Guava','Astma_weed','Hibiscus','Kohlrabi','Insulin','Honge','Lantana','Lemon','Lemongrass','Marigold','Mint','Neem','Nelavembu','Pepper','Tulsi','Turmeric','Ashoka','camphor','kepala']
        nresult= str(index[prediction]) 
        return {"members":[nresult,filepath.replace('\\','/').replace('c:','C:')]}
    else: 
         return "Hello"
@app.route('/result2',methods=["GET","POST"])
def ores():
    if request.method=="POST":
        f=request.files['image']
        basepath=os.path.dirname(__file__)
        filepath=os.path.join(basepath, 'templates\\src\\uploads', f.filename)
        f.save(filepath)
        img=image.load_img(filepath,target_size=(224,224))
        x=image.img_to_array(img)
        x=np.expand_dims(x, axis=0)
        img_data=preprocess_input(x)
        prediction=np.argmax(modelo.predict(img_data))
        index=['Anthracnose','algal leaf','bird eye spot','brown blight','gray light',
               'healthy','red leaf spot','white spot']
        nresult= str(index[prediction]) 
        return {"members":[nresult,filepath.replace('\\','/').replace('c:','C:')]}    
    else: 
         return "Hello"        
 
    
if __name__ =="__main__":
        app.run(debug=True, port=8080)


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from IPython.display import Image
from sklearn.externals.six import StringIO
from sklearn.tree import export_graphviz
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn import tree
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn import svm
from sklearn import metrics
from sklearn.tree import DecisionTreeRegressor


df = pd.read_csv("~/Desktop/iris-machine-learning/IRIS.csv")

"""EDA plot"""
EDA_plot_sepal = df[df.species == "Iris-setosa"].plot(kind = "scatter", x="sepal_length", y="sepal_width", color="red", label="Setosa")
df[df.species == "Iris-versicolor"].plot(kind = "scatter", x="sepal_length", y="sepal_width", color="green", label="Versicolor", ax=EDA_plot_sepal)
df[df.species == "Iris-virginica"].plot(kind = "scatter", x="sepal_length", y="sepal_width", color="yellow", label="Virginica", ax=EDA_plot_sepal)

EDA_plot_sepal.set_xlabel("Sepal Length")
EDA_plot_sepal.set_ylabel("Sepal Width")
EDA_plot_sepal.set_title("IRIS Sepal")
EDA_plot_sepal=plt.gcf()
EDA_plot_sepal.set_size_inches(10,7)

EDA_plot_petal = df[df.species == "Iris-setosa"].plot(kind = "scatter", x="petal_length", y="petal_width", color="red", label="Setosa")
df[df.species == "Iris-versicolor"].plot(kind = "scatter", x="petal_length", y="petal_width", color="green", label="Versicolor", ax=EDA_plot_petal)
df[df.species == "Iris-virginica"].plot(kind = "scatter", x="petal_length", y="petal_width", color="yellow", label="Virginica", ax=EDA_plot_petal)

EDA_plot_petal.set_xlabel("Petal Length")
EDA_plot_petal.set_ylabel("Petal Width")
EDA_plot_petal.set_title("IRIS Petal")
EDA_plot_petal=plt.gcf()
EDA_plot_petal.set_size_inches(10,7)

"""Histogram"""
df.hist(edgecolor = "black", linewidth = 1)
hist = plt.gcf()
hist.set_size_inches(10,7)

"""Violin Plot"""
plt.figure(figsize=(15,10))
plt.subplot(2, 2, 1)
sns.violinplot(x = "species", y = "sepal_length", data = df)
plt.subplot(2, 2, 2)
sns.violinplot(x = "species", y = "sepal_width", data = df)
plt.subplot(2, 2, 3)
sns.violinplot(x = "species", y = "petal_length", data = df)
plt.subplot(2, 2, 4)
sns.violinplot(x = "species", y = "petal_length", data = df)

"""HeatMap"""
plt.figure(figsize=(8, 4))
sns.heatmap(df.corr(), annot=True, cmap="cubehelix_r")
plt.show()

"""Splitting The Data into Training And Testing Dataset""" 
train, test = train_test_split(df, test_size=0.2) #data split to train ans test with the attribute test size 20% and train 80%

train_x = train[["sepal_length", "sepal_width", "petal_length", "petal_width"]] #feat data
train_y = train.species #output from training data

test_x = test[["sepal_length", "sepal_width", "petal_length", "petal_width"]] #feat data
test_y = test.species #output from testing data

"""Creating IRIS Training Data"""
sepal = df[["sepal_length", "sepal_width", "species"]]
petal = df[["petal_length", "petal_width", "species"]]

train_sepal, test_sepal = train_test_split(sepal, test_size=0.2, random_state=0)
train_x_sepal = train_sepal[["sepal_length", "sepal_width"]]
train_y_sepal = train_sepal.species
test_x_sepal = test_sepal[["sepal_length", "sepal_width"]]
test_y_sepal = test_sepal.species

train_petal, test_petal = train_test_split(petal, test_size=0.2, random_state=0)
train_x_petal = train_petal[["petal_length", "petal_width"]]
train_y_petal = train_petal.species
test_x_petal = test_petal[["petal_length", "petal_width"]]
test_y_petal = test_petal.species


"""Support Vector Machine Algorithm"""
model = svm.SVC()
model.fit(train_x, train_y)
prediction = model.predict(test_x)
print("The accuracy of SVM: ", metrics.accuracy_score(prediction, test_y))
model = svm.SVC()
model.fit(train_x_sepal, train_y_sepal)
prediction = model.predict(test_x_sepal)
model.fit(train_x_petal, train_y_petal)
prediction = model.predict(test_x_petal)
print("The accuracy of SVM_sepal: ", metrics.accuracy_score(prediction, test_y_sepal))
print("The accuracy of SVM_petal: ", metrics.accuracy_score(prediction, test_y_petal))

"""Logistic Regression"""
model = LogisticRegression()
model.fit(train_x, train_y)
prediction = model.predict(test_x)
print("The accuracy of Logistic Regression: ", metrics.accuracy_score(prediction, test_y))
model = LogisticRegression()
model.fit(train_x_sepal, train_y_sepal)
prediction = model.predict(test_x_sepal)
model.fit(train_x_petal, train_y_petal)
prediction = model.predict(test_x_petal)
print("The accuracy of Logistic Regression_sepal: ", metrics.accuracy_score(prediction, test_y_sepal))
print("The accuracy of Logistic Regression_petal: ", metrics.accuracy_score(prediction, test_y_petal))

"""Decision Tree"""
model = DecisionTreeClassifier(max_depth=4)
model.fit(train_x, train_y)
prediction = model.predict(test_x)
print("The accuracy of DecisionTree: ", metrics.accuracy_score(prediction, test_y))
model = DecisionTreeClassifier()
model.fit(train_x_sepal, train_y_sepal)
prediction = model.predict(test_x_sepal)
model.fit(train_x_petal, train_y_petal)
prediction = model.predict(test_x_petal)
print("The accuracy of DecisionTree_sepal: ", metrics.accuracy_score(prediction, test_y_sepal))
print("The accuracy of DecisionTree_petal: ", metrics.accuracy_score(prediction, test_y_petal))

"""K-Nearest Neighbors"""
model = KNeighborsClassifier(n_neighbors=5)
model.fit(train_x, train_y)
prediction = model.predict(test_x)
print("The accuracy of KNN: ", metrics.accuracy_score(prediction, test_y))
model = KNeighborsClassifier(n_neighbors=5)
model.fit(train_x_sepal, train_y_sepal)
prediction = model.predict(test_x_sepal)
model.fit(train_x_petal, train_y_petal)
prediction = model.predict(test_x_petal)
print("The accuracy of KNN_sepal: ", metrics.accuracy_score(prediction, test_y_sepal))
print("The accuracy of KNN_petal: ", metrics.accuracy_score(prediction, test_y_petal))

"""check the accuracy for various values of n for KNN"""
n_range = list(range(1,20))
n = pd.Series()
for i in n_range:
    model = KNeighborsClassifier(n_neighbors=i)
    model.fit(train_x, train_y)
    prediction = model.predict(test_x)
    n = n.append(pd.Series(metrics.accuracy_score(prediction, test_y)))
plt.plot(n_range, n)
plt.xticks(n_range)


sns.pairplot(df.drop("Id", axis = 1), hue = "species", size = 3)
pd.plotting.andrews_curves(df.drop("Id", axis = 1), "species")
pd.plotting.parallel_coordinates(df.drop("Id", axis = 1), "species")
plt.show()
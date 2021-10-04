# iris-machine-learning   
<img src="https://user-images.githubusercontent.com/56881546/77530645-063d6e00-6ed5-11ea-87a0-29e4b07e00dd.png" alt="drawing" width="200" height="200" align="right"/>



This repo is useful to start learning Machine Learning with the Iris flower classification using Python with model of 
* Support Vector Machine Algorithm
* Logistic Regression
* Decision Tree
* K-Nearest Neighbors
## General info
Machine learning is the scientific study of algorithms and statistical models by extracting knowledge from data. It is a subset of studying in artificial intelligence with computer science for prediction and decisions.
## Dataset info
The Iris flower data set is a multivariate data set introduced by the British statistician and biologist Ronald Fisher.
It contains a set of 150 records under five attributes: petal length, petal width, sepal length, sepal width and species. 
The goal is to create a machine learning model with thid dataset to learn from the measurements of these irises, so that we can predict the species for the new irises that has been found.
## Technology
Project is created with Python version: 3.6.0 :snake:
## Getting started
To run this project, install library:
``` 
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn import ...

```
## Code Examples
The belowing example code shows Support Vector Machine algorithm to study basically machine learning of iris dataset. SVM is a supervised machine learning algorithm which can be used for both classification or regression challenges. 
```
"Support Vector Machine Algorithm"
model = svm.SVC()
model.fit(train_x, train_y)
prediction = model.predict(test_x)
print("The accuracy of SVM: ", metrics.accuracy_score(prediction, test_y))

```
## Acknowledgements
* [Open Machine Learning Course](https://github.com/Yorko/mlcourse.ai)
* [Basic ML-Study from BorntoDev](http://www.youtube.com/watch?v=https://youtube.com/watch?v=lA5MHygnFcg) (Thai-only)
* [Original Repo](https://github.com/gympohnpimol/iris-machine-learning)

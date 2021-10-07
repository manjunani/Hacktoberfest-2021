# Importing the required libraries
library(e1071)
library(caret)
library(ggplot2)

# Importing the dataset
iris <- read.csv('HacktoberFest_2021\\MLProjects\\ML Using R\\IRIS.csv')
View(iris)

# spliting iris dataset into train and test datasets
set.seed(2)
id <- sample(2, nrow(iris), prob=c(0.7, 0.3), replace=TRUE)
train <- iris[id==1,]
test <- iris[id==2,]

# Building the Naive Bayes model
model <- naiveBayes(as.factor(species)~., train)

# Predicting using the built model and test dataset
predict_model <- predict(model, test)

# Finding the accuracy of the model
confusionMatrix(table(predict_model, test$species))
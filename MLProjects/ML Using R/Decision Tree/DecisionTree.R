# Importing the required libraries
library(rpart)
library(caret)
library(ggplot2)

#Importing the required dataset
credit <- read.csv('HacktoberFest_2021\\MLProjects\\ML Using R\\CreditCard.csv')
View(credit)
c <- read.csv('HacktoberFest_2021\\MLProjects\\ML Using R\\CreditCard.csv')
nrow(credit)-sum(complete.cases(credit))

#train test split
train <- sample(1:nrow(credit), size = ceiling(0.70*nrow(credit)), replace = TRUE)
c_train <- credit[train, ]
c_test <- credit[-train, ]
c1_test <- c_test[, -21]

#building model
tree <- rpart(Fraud~., data = c_train)

#predicting the model
p <- predict(object=tree,c1_test,type="class")
confusionMatrix(table(p, c_test$Fraud))

#plotting the decision tree
plot(tree)
plot(tree, uniform=TRUE, main="Fraud Classification")
text(tree, use.n=TRUE, all=TRUE, cex = .8)
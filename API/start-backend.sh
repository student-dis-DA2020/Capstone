#!/bin/bash

mvn package
mvn compile
java -jar target/carline-0.0.1-SNAPSHOT.jar

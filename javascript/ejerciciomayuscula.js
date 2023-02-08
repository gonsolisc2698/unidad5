const topics = ["JavaScript", "Variables", "Funciones", "Condicionales", "Bucles"];
const upperCaseTopics = topics.map(function(topic) {
    return topic.toUpperCase(); });
const reverseTopics = upperCaseTopics.reverse();
console.log('los tópicos  de antes eran '+topics)
console.log('los tópicos nuevos son '+reverseTopics);

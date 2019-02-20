# FriendFinder

Heroku Deployed Link (not operational yet): https://friend-finder-appkkb.herokuapp.com/

Friend finder is an application that takes in information from a survey to best match it with a similar one submitted by someone else.

the answers given by the user are converted into an array so that it can easily be matched with a similar one.

you will need to have express and path installed in order to use it
it is made to be deployed on heroku

Thought Process (ToDo list)

    Require express and path
    Set up server
    Code HomePage
        button to start survey
    Code Survey
        remember how to make a quiz like form
        ten question with the stongly agree strongly disagree format
        convert answers into an array of integers
        store data
            need to figure out how to refer to the data entered on the survey in my js file
        compare user array to json array
            calcualte difference for each question
            most similar friend is the one with the lowest difference
        display 'friends' with the most similar arrays (as a modal pop up)


var surveyArray;

function surveyResults(){
    $.ajax({
        url: 'friends.js',
        type: 'get',
        dataType : 'json',
        success: function(data) {
            surveyArray = data;
            console.log(surveyArray[0].name.image.scores);
        }
    });
}
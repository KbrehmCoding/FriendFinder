// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should
//roughly follow the format below.

module.exports = [
    {
        'name': 'Ahmed',
        'photo': 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
        'scores': [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];


//just an experiment, I dont know if the code below is what I actually need to do here
var surveyArray;

function surveyResults(){
    $.ajax({
        url: 'friends.js',
        type: 'get',
        dataType : 'json',
        success: function(data) {
            surveyArray = data;
            console.log(surveyArray[0].name.image.scores); // bob
        }
    });
}
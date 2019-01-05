const express = require('express');
const path = require('path');

const server = app.listening(3000, listening);

app.use(express.static('public'));

var json = {
    questions: [
        {
            type: 'matrix'
            name: 'compatibility'
            title: 'How would you rate yourself on the parameters below?'
            collumns: [
                {
                    value: 1,
                    text: 'Strongly Disagree'
                }, {
                    value: 2,
                    text: 'Disagree'
                }, {
                    value: 3,
                    text: 'Neutral'
                }, {
                    value: 4,
                    text: 'Agree'
                }, {
                    value: 5,
                    text: 'Strongly Agree'
                }
            ],
            rows: [
                {
                    value: 'dog person',
                    text: 'I like dogs'
                },
                {
                    value: 'cat person',
                    text: 'I like cats'
                },
                {
                    value: 'Extroversion',
                    text: 'I am an outgoing person'
                },
                {
                    value: 'activities',
                    text: 'I would rather stay in and watch a movie than go partying'
                },
                {
                    value: 'Bluntness',
                    text: 'I always say what I feel'
                },
                {
                    value: 'Openess',
                    text: 'I make friends easily'
                },
                {
                    value: 'Optamisim',
                    text: 'I always look for the silver lining'
                },
                {
                    value: 'Drama',
                    text: 'I try to avoid unnecessary conflict'
                },
                {
                    value: 'Empathy',
                    text: 'I can tell when someone is upset'
                },
                {
                    value: 'Ambition',
                    text: 'You can always find ways to improve yourself'
                }
            ]
        }
    ]
}
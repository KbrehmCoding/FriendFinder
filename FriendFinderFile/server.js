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
                    rating: 1,
                    answer: 'Strongly Disagree'
                }, {
                    rating: 2,
                    answer: 'Disagree'
                }, {
                    rating: 3,
                    answer: 'Neutral'
                }, {
                    rating: 4,
                    answer: 'Agree'
                }, {
                    rating: 5,
                    answer: 'Strongly Agree'
                }
            ],
            rows: [
                {
                    title: 'dog person',
                    question: 'I like dogs'
                },
                {
                    title: 'cat person',
                    question: 'I like cats'
                },
                {
                    title: 'Extroversion',
                    question: 'I am an outgoing person'
                },
                {
                    title: 'activities',
                    question: 'I would rather stay in and watch a movie than go partying'
                },
                {
                    title: 'Bluntness',
                    question: 'I always say what I feel'
                },
                {
                    title: 'Openess',
                    question: 'I make friends easily'
                },
                {
                    title: 'Optamisim',
                    question: 'I always look for the silver lining'
                },
                {
                    title: 'Drama',
                    question: 'I try to avoid unnecessary conflict'
                },
                {
                    title: 'Empathy',
                    question: 'I can tell when someone is upset'
                },
                {
                    title: 'Ambition',
                    question: 'You can always find ways to improve yourself'
                }
            ]
        }
    ]
}
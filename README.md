# ISE-ExamOnlineFE

> A Vue.js project
> Using vuex,vue-router,iView,axios

***baseUrl need to be modified before connected to the backend***

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

测试用JSON：
(通过`json-server`进行本地测试)
```Json
{
    "subject": [{
            "course": 1,
            "success": 1,
            "num": 2,
            "papers": [{
                    "paper_year": 2016,
                    "paper_title": "Advanced Mathmatics A",
                    "id": 123
                },
                {
                    "paper_year": 2015,
                    "paper_title": "Advanced Mathmatics A",
                    "id": 124
                }
            ]
        },
        {
            "course": 2,
            "success": 1,
            "num": 3,
            "papers": [{
                "paper_year": 2016,
                "paper_title": "Introduction to Software Engineering",
                "id": 211
            }, {
                "paper_year": 2015,
                "paper_title": "Introduction to Software Engineering",
                "id": 212
            }, {
                "paper_year": 2014,
                "paper_title": "Introduction to Software Engineering",
                "id": 213
            }]
        }
    ],
    "paper": [{
        "success": 1,
        "paperId": 123,
        "ProblemNum": 4,
        "Problems": [{
            "ProblemId": 123213,
            "ProblemOrder": 1
        }, {
            "ProblemId": 12342,
            "ProblemOrder": 2
        }, {
            "ProblemId": 12349,
            "ProblemOrder": 3
        }, {
            "ProblemId": 12340,
            "ProblemOrder": 4
        }]
    }, {
        "success": 1,
        "paperId": 124,
        "ProblemNum": 3,
        "Problems": [{
            "ProblemId": 2666,
            "ProblemOrder": 1
        }, {
            "ProblemId": 2667,
            "ProblemOrder": 2
        }, {
            "ProblemId": 2668,
            "ProblemOrder": 3
        }]
    }],
    "problem": [{
            "success": 1,
            "id": 123213,
            "pro_detail": "I have no idea about the advanced mathmatics like x^2",
            "option": ["\\frac{1}{2}", "\\displaystyle\\sum_{i=1}^{k+1}i", "\\frac{k(k+1)+2(k+1)}{2}", "option D"]
        },
        {
            "success": 1,
            "id": 12342,
            "pro_detail": "I have no idea about the JDS",
            "option": ["emm", "hhh", "233", "666"]
        },
        {
            "success": 1,
            "id": 12349,
            "pro_detail": "I have no idea about the WZW",
            "option": ["T A", "T B", "T C", "T D"]
        },
        {
            "success": 1,
            "id": 12340,
            "pro_detail": "I have no idea about the MMM",
            "option": ["t A", "t B", "t C", "t D"]
        }
    ],
    "judge":[
        {
            "result": 1,
            "success":1,
            "id": 123213
        },
        {
            "result": 0,
            "success":1,
            "id": 12342
        },
        {
            "result": 1,
            "success":1,
            "id": 12349
        },
        {
            "result": 1,
            "success":1,
            "id": 12340
        }
    ],
    "answer":[
        {
            "correct": 0,
            "success":1,
            "explain":"这是问题的解析，让你的妈妈真的笑，笑出声",
            "id": 123213
        },
        {
            "correct": 1,
            "success":1,
            "explain":"这是问题的解析，让你的妈妈真的笑，笑出声",
            "id": 12342
        },
        {
            "correct": 2,
            "success":1,
            "explain":"这是问题的解析，让你的妈妈真的笑，笑出声",
            "id": 12349
        },
        {
            "correct": 3,
            "success":1,
            "explain":"这是问题的解析，让你的妈妈真的笑，笑出声",
            "id": 12340
        }
    ]
}
```

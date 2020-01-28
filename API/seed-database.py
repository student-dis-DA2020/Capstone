# This script autopopulates dummy student data to a local MongoDB instance
# Requred - pip install pymongo
# Just type "python3 populate-localDB.py students create"
# Does not work if there is any data in the collection, so you may need to run
# "python3 populate-localDB.py students delete" command if your having an issue

import pymongo
import sys

myclient = pymongo.MongoClient("mongodb://localhost:27017")
# Database name
mydb = myclient["Students-debug"]
# Collection name
students = mydb["Students-all"]


def StudentsCreateDB():
    mylist = [
        {
            "_id": "100",
            "name": "Sara Jones",
            "guardians": [
                "Tim Jones",
                "Dolly Jones"
            ],
            "grade": 0,
            "room": 302,
            "teacher": "Jack Frost",
            "cars": [
                "LSV 281",
                "SSS 782"
            ],
            "position": -1,
            "bus": 14,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "101",
            "name": "Jathan Purvis",
            "guardians": [
                "Tim Purvis",
                "Dolly Purvis"
            ],
            "grade": 2,
            "room": 166,
            "teacher": "Lena Dunham",
            "cars": [
                "XRT 455"
            ],
            "position": -1,
            "bus": 14,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "102",
            "name": "Ameen Schaefer",
            "guardians": [
                "Tim Schaefer",
                "Dolly Schaefer"
            ],
            "grade": 0,
            "room": 302,
            "teacher": "Lori Strothers",
            "cars": [
                "QTR 678",
                "TGH 342"
            ],
            "position": -1,
            "bus": 14,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "103",
            "name": "Guiseppe Kay",
            "guardians": [
                "Tim Kay",
                "Dolly Kay"
            ],
            "grade": 1,
            "room": 212,
            "teacher": "Beth Cavner",
            "cars": [
                "QAZ 211",
                "IOP 555"
            ],
            "position": -1,
            "bus": 8,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "104",
            "name": "Winston Buckner",
            "guardians": [
                "Tim Buckner",
                "Dolly Buckner"
            ],
            "grade": 3,
            "room": 16,
            "teacher": "Jack Frost",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 8,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "105",
            "name": "Connie Black",
            "guardians": [
                "Tim Black",
                "Dolly Black"
            ],
            "grade": 1,
            "room": 417,
            "teacher": "Lori Strothers",
            "cars": [
                "816 KEP"
            ],
            "position": -1,
            "bus": 8,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "106",
            "name": "Freda Joseph",
            "guardians": [
                "Tim Joseph",
                "Dolly Joseph"

            ],
            "grade": 4,
            "room": 117,
            "teacher": "Sarah Parker",
            "cars": [
                "XKZ7606"
            ],
            "position": -1,
            "bus": 6,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "107",
            "name": "Milton Aguilar",
            "guardians": [
                "Tim Aguilar",
                "Dolly Aguilar"
            ],
            "grade": 2,
            "room": 132,
            "teacher": "Lori Strothers",
            "cars": [
                "0-1397E"
            ],
            "position": -1,
            "bus": 6,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "108",
            "name": "Erin Daniel",
            "guardians": [
                "Tim Daniel",
                "Dolly Daniel"
            ],
            "grade": 0,
            "room": 182,
            "teacher": "Sarah Parker",
            "cars": [
                "KPB 182"
            ],
            "position": -1,
            "bus": 6,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "109",
            "name": "June Nelson",
            "guardians": [
                "Tim Nelson",
                "Dolly Nelson"
            ],
            "grade": 5,
            "room": 166,
            "teacher": "Beth Cavner",
            "cars": [
                "171-YJO"
            ],
            "position": -1,
            "bus": 19,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "110",
            "name": "Alonzo Simmons",
            "guardians": [
                "Tim Simmons",
                "Dolly Simmons"
            ],
            "grade": 3,
            "room": 144,
            "teacher": "Jack Frost",
            "cars": [
                "LHZ 845"
            ],
            "position": -1,
            "bus": 19,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "111",
            "name": "Katrina Pearson",
            "guardians": [
                "Tim Pearson",
                "Dolly Pearson"
            ],
            "grade": 2,
            "room": 8,
            "teacher": "Lori Strothers",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 19,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "112",
            "name": "Jeanne Hamilton",
            "guardians": [
                "Tim Hamilton",
                "Dolly Hamilton"
            ],
            "grade": 0,
            "room": 212,
            "teacher": "Sarah Parker",
            "cars": [
                "963-BSX"
            ],
            "position": -1,
            "bus": 217,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "113",
            "name": "Davey Carmen",
            "guardians": [
                "Tim Carmen",
                "Dolly Carmen"
            ],
            "grade": 0,
            "room": 212,
            "teacher": "Lori Strothers",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 217,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "114",
            "name": "Grace Meyer",
            "guardians": [
                "Tim Meyer",
                "Dolly Meyer"
            ],
            "grade": 5,
            "room": 217,
            "teacher": "Jack Frost",
            "cars": [
                "LHZ 845"
            ],
            "position": -1,
            "bus": 7,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "115",
            "name": "Loretta Pierce",
            "guardians": [
                "Tim Pierce",
                "Dolly Pierce"
            ],
            "grade": 2,
            "room": 19,
            "teacher": "Sarah Parker",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 7,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "116",
            "name": "Patty Arnold",
            "guardians": [
                "Tim Arnold",
                "Dolly Arnold"
            ],
            "grade": 1,
            "room": 168,
            "teacher": "Lori Strothers",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 7,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "117",
            "name": "Maxine Ball",
            "guardians": [
                "Tim Ball",
                "Dolly Ball"
            ],
            "grade": 4,
            "room": 80,
            "teacher": "Lori Strothers",
            "cars": [
                "1X 65152"
            ],
            "position": -1,
            "bus": 51,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "118",
            "name": "Loretta Floyd",
            "guardians": [
                "Tim Floyd",
                "Dolly Floyd"
            ],
            "grade": 1,
            "room": 314,
            "teacher": "Beth Cavner",
            "cars": [
                "HAP 165"
            ],
            "position": -1,
            "bus": 51,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "119",
            "name": "Carol Diaz",
            "guardians": [
                "Tim Diaz",
                "Dolly Diaz"
            ],
            "grade": 0,
            "room": 188,
            "teacher": "Jack Frost",
            "cars": [
                "I11 2RR"
            ],
            "position": -1,
            "bus": 51,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "120",
            "name": "Bennie Silva",
            "guardians": [
                "Tim Silva",
                "Dolly Silva"
            ],
            "grade": 1,
            "room": 212,
            "teacher": "Lori Strothers",
            "cars": [
                "JUL0766"
            ],
            "position": -1,
            "bus": 51,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "121",
            "name": "Phil Conner",
            "guardians": [
                "Tim Conner",
                "Dolly Conner"
            ],
            "grade": 3,
            "room": 21,
            "teacher": "Sarah Parker",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 1,
            "mode": "CAR",
            "waiting": False
        },
        {
            "_id": "122",
            "name": "Richard Walton",
            "guardians": [
                "Tim Walton",
                "Dolly Walton"
            ],
            "grade": 1,
            "room": 189,
            "teacher": "Lori Strothers",
            "cars": [
                "S76-06C"
            ],
            "position": -1,
            "bus": 1,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "123",
            "name": "Elena Willis",
            "guardians": [
                "Tim Willis",
                "Dolly Willis"
            ],
            "grade": 1,
            "room": 126,
            "teacher": "Beth Cavner",
            "cars": [
                "956 9FT"
            ]
        },
        {
            "_id": "124",
            "name": "Edmund Poole",
            "guardians": [
                "Tim Poole",
                "Dolly Poole"
            ],
            "grade": 2,
            "room": 113,
            "teacher": "Sarah Parker",
            "cars": [
                "MG-0439"
            ],
            "position": -1,
            "bus": 1,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "125",
            "name": "Robyn Gill",
            "guardians": [
                "Tim Gill",
                "Dolly Gill"
            ],
            "grade": 4,
            "room": 123,
            "teacher": "Lori Strothers",
            "cars": [
                "XKZ7606"
            ],
            "position": -1,
            "bus": 66,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "126",
            "name": "Lula Mcdonald",
            "guardians": [
                "Tim Mcdonald",
                "Dolly Mcdonald"
            ],
            "grade": 0,
            "room": 6,
            "teacher": "Jack Frost",
            "cars": [
                "956 9FT"
            ],
            "position": -1,
            "bus": 66,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "127",
            "name": "Ismael Dawson",
            "guardians": [
                "Tim Dawson",
                "Dolly Dawson"
            ],
            "grade": 5,
            "room": 116,
            "teacher": "Sarah Parker",
            "cars": [
                "1-N0808"
            ],
            "position": -1,
            "bus": 66,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "128",
            "name": "Angela Bass",
            "guardians": [
                "Tim Bass",
                "Dolly Bass"
            ],
            "grade": 2,
            "room": 118,
            "teacher": "Lena Dunham",
            "cars": [
                "S76-06C"
            ],
            "position": -1,
            "bus": 32,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "129",
            "name": "Bernadette Jenkins",
            "guardians": [
                "Tim Jenkins",
                "Dolly Jenkins"
            ],
            "grade": 3,
            "room": 165,
            "teacher": "Lori Strothers",
            "cars": [
                "KPJ 742"
            ],
            "position": -1,
            "bus": 32,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "130",
            "name": "Charles Nash",
            "guardians": [
                "Tim Nash",
                "Dolly Nash"
            ],
            "grade": 0,
            "room": 119,
            "teacher": "Beth Cavner",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 32,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "131",
            "name": "Janice Daniels",
            "guardians": [
                "Tim Daniels",
                "Dolly Daniels"
            ],
            "grade": 2,
            "room": 76,
            "teacher": "Sarah Parker",
            "cars": [
                "LHZ 845"
            ],
            "position": -1,
            "bus": 32,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "132",
            "name": "Faith Santos",
            "guardians": [
                "Tim Santos",
                "Dolly Santos"
            ],
            "grade": 3,
            "room": 212,
            "teacher": "Lena Dunham",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 32,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "133",
            "name": "Victor Gordon",
            "guardians": [
                "Tim Gordon",
                "Dolly Gordon"
            ],
            "grade": 1,
            "room": 212,
            "teacher": "Jack Frost",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 462,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "134",
            "name": "Guy Morrison",
            "guardians": [
                "Tim Morrison",
                "Dolly Morrison"
            ],
            "grade": 0,
            "room": 169,
            "teacher": "Lori Strothers",
            "cars": [
                "I11 2RR"
            ],
            "position": -1,
            "bus": 462,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "135",
            "name": "Gwen Gonzales",
            "guardians": [
                "Tim Gonzales",
                "Dolly Gonzales"
            ],
            "grade": 3,
            "room": 182,
            "teacher": "Sarah Parker",
            "cars": [
                "JUL0766"
            ],
            "position": -1,
            "bus": 462,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "136",
            "name": "Sheldon Boone",
            "guardians": [
                "Tim Boone",
                "Dolly Boone"
            ],
            "grade": 1,
            "room": 115,
            "teacher": "Beth Cavner",
            "cars": [
                "963-BSX"
            ],
            "position": -1,
            "bus": 74,
            "mode": "BUS",
            "waiting": False
        },
        {
            "_id": "137",
            "name": "Leah Reed",
            "guardians": [
                "Tim Reed",
                "Dolly Reed"
            ],
            "grade": 2,
            "room": 212,
            "teacher": "Sarah Parker",
            "cars": [
                "VBN 333"
            ],
            "position": -1,
            "bus": 74,
            "mode": "WALK",
            "waiting": False
        },
        {
            "_id": "138",
            "name": "Leah Marshall",
            "guardians": [
                "Tim Marshall",
                "Dolly Marshall"
            ],
            "grade": 3,
            "room": 190,
            "teacher": "Lori Strothers",
            "cars": [
                "KTX4100"
            ],
            "position": -1,
            "bus": 74,
            "mode": "WALK",
            "waiting": False
        },
        {
            "_id": "139",
            "name": "Leah Reed",
            "guardians": [
                "Tim Reed",
                "Dolly Reed"
            ],
            "grade": 0,
            "room": 212,
            "teacher": "Jack Frost",
            "cars": [
                "KPB 182"
            ],
            "position": -1,
            "bus": 4,
            "mode": "WALK",
            "waiting": False
        },
        {
            "_id": "140",
            "name": "Stacy Bryant",
            "guardians": [
                "Tim Bryant",
                "Dolly Bryant"
            ],
            "grade": 2,
            "room": 111,
            "teacher": "Jack Frost",
            "cars": [
                "171-YJO"
            ],
            "position": -1,
            "bus": 4,
            "mode": "WALK",
            "waiting": False
        }
    ]
    students.insert_many(mylist)
    print("Populated Students-all Collection.")


def StudentsDeleteCollection():
    students.drop()
    print("Dropped Students-all Collection")


if (len(sys.argv) > 2):
    if (sys.argv[1] == "students"):
        if (sys.argv[2] == "create"):
            StudentsCreateDB()
        elif (sys.argv[2] == "delete"):
            StudentsDeleteCollection()
    else:
        print("Invalid. HELP: python3 populate-localDB.py students [OPTION]")
        print("[OPTION]: create, delete, help")
else:
    print("Invalid. HELP: python3 populate-localDB.py students [OPTION]")
    print("[OPTION]: create, delete, help")
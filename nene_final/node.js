let normalDay = [
    "10:00-12:00",
    "12:00-14:00",
    "14:00-16:00",
    "16:00-18:00",
    "18:00-20:00",
];

let weekEndDay = [
    "12:00-14:00",
    "14:00-16:00",
    "16:00-18:00",
    "18:00-20:00",
    "20:00-22:00",
];
let weekBox = document.querySelector(".week");

const data = [{
    monday: [
        {   
            id: 1,
            start: 10,
            end: 20,
            title: 'ურჩხული და ლამაზმანი',
            cover: 'https://tkt-static.lemon.do/img/5161dbdb-0050-48f4-b7f2-4c21c8a7ba36.jpeg',
        },
        {
            id: 2,
            start: 10,
            end: 20,
            title: 'მერე რა რომ, სველია სველი იასამანი',
            cover: 'https://tkt-static.lemon.do/img/0f40afe7-396d-4158-8526-0b56b0c6b255.jpeg',
        },
        {
            id: 3,
            start: 10,
            end: 20,
            title: 'შეყრა',
            cover: 'https://tkt-static.lemon.do/img/68eaefd8-2a61-48bc-a0ce-7261aab14bc8.jpeg',
        }
    ],
    tuesday: [
        {
            id: 4,
            start: 10,
            end: 20,
            title: 'მე, ბებია, ბაბუა და ჭინკები',
            cover: 'https://tkt-static.lemon.do/img/410c4b0e-d63a-46c3-bb74-d3a03f753853.jpeg',
        },
        {
            id: 5,
            start: 10,
            end: 20,
            title: 'ყვავილები ელჯერნონისთვის',
            cover: 'https://tkt-static.lemon.do/img/053b9bdf-604e-4080-9b31-07d56e830f6d.jpeg',
        },
        {
            id: 6,
            start: 10,
            end: 20,
            title: 'ფრთხილად ადამსები!',
            cover: 'https://tkt-static.lemon.do/img/1db992f5-1d32-4dd7-a6a0-3bc668910b21.jpeg',
        }
    ],
    wednesday: [
        {
            id: 7,
            start: 10,
            end: 20,
            title: 'სხვების ცხოვრება',
            cover: 'https://tkt-static.lemon.do/img/01596ec6-7ef8-41dc-84a6-3adb84545d60.jpeg',
        },
        {
            id: 8,
            start: 10,
            end: 20,
            title: 'რამონა',
            cover: 'https://tkt-static.lemon.do/img/52247154-7cb1-495f-979c-013e2730e59c.jpeg',
        },
        {
            id: 9,
            start: 10,
            end: 20,
            title: 'კომედიანტები',
            cover: 'https://tkt-static.lemon.do/img/c0e68ee5-b119-476e-81f1-1bb33589e776.jpeg',
        }
    ],
    thursday: [
        {
            id: 10,
            start: 10,
            end: 20,
            title: 'ჩემი გაზაფხულის შემოდგომა',
            cover: 'https://tkt-static.lemon.do/img/94b6b77e-ca60-4b1a-b24a-3eb26092403d.jpeg',
        },
        {
            id: 11,
            start: 10,
            end: 20,
            title: 'ანუ მე შენ მიყვარხარ',
            cover: 'https://tkt-static.lemon.do/img/c19054cd-fa85-4924-9895-0ff6597dbfb5.jpeg',
        },
        {
            id: 12,
            start: 10,
            end: 20,
            title: 'მოხუცი და ზღვა',
            cover: 'https://tkt-static.lemon.do/img/2b4be8eb-c6be-4ef7-b4fb-c3933a45f123.jpeg',
        }
    ],
    friday: [
        {
            id: 13,
            start: 10,
            end: 20,
            title: 'ყველაზე მაგარი გოგოები',
            cover: 'https://tkt-static.lemon.do/img/a81df611-4dbd-4a91-8002-83abaeadd65d.jpeg',
        },
        {
            id: 14,
            start: 10,
            end: 20,
            title: 'ალადინი',
            cover: 'https://tkt-static.lemon.do/img/0d97441c-8656-49cf-bc49-f0c951a9e39b.jpeg',
        },
        {
            id: 15,
            start: 10,
            end: 20,
            title: 'ურჩხული და ლამაზმანი',
            cover: 'https://tkt-static.lemon.do/img/5161dbdb-0050-48f4-b7f2-4c21c8a7ba36.jpeg',
        }
    ],
    saturday: [
        {
            id: 16,
            start: 12,
            end: 22,
            title: 'წითელქუდა',
            cover: 'https://tkt-static.lemon.do/img/9a0ced6e-329b-4b6b-951e-1748c8621ee2.jpeg',
        },
        {
            id: 17,
            start: 12,
            end: 22,
            title: 'გაყრა',
            cover: 'https://tkt-static.lemon.do/img/b6e3f2c1-9cce-4fd4-8d42-4e71ffafb1a1.jpeg',
        },
        {
            id: 18,
            start: 12,
            end: 22,
            title: 'ზღაპარი იგი მათრობს და მხიბლავს',
            cover: 'https://tkt-static.lemon.do/img/f35816df-43b2-43ce-a844-3c89f82c439f.jpeg',
        }
    ],
    sunday: [
        {
            id: 19,
            start: 12,
            end: 22,
            title: 'ცილინდრი',
            cover: 'https://tkt-static.lemon.do/img/82c2e9e4-4ef7-4fe5-a8c9-008425babdf9.jpeg',
        },
        {
            id: 20,
            start: 12,
            end: 22,
            title: 'შვლის ნუკრის ნაამბობი',
            cover: 'https://tkt-static.lemon.do/img/f7ea467f-b4b4-42f8-9a0a-9fd0e9f7618f.jpeg',
        },
        {
            id: 21,
            start: 12,
            end: 22,
            title: 'წითელი ფეხსაცმელები',
            cover: 'https://tkt-static.lemon.do/img/228702ef-7486-4160-8b3e-d1dd60e50993.jpeg',
        }
    ],
}];

function getNext7Days() {
    var today = new Date();
    var next7Days = [];
    for (var i = 0; i < 7; i++) {
        var nextDay = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
        let dayOfWeek;
        if (i == 0) {
            dayOfWeek = new Date().getDay();
        } else {
            dayOfWeek = new Date((i - 1) * 24 * 60 * 60 * 1000).getDay();
        }
        next7Days.push([translateWeekDay(nextDay.getDay()), dayOfWeek]);
    }
    return next7Days;
}
function translateWeekDay(dayOfWeek) {
    switch (dayOfWeek) {

        case 0:
            return "ორშაბათი";
        case 1:
            return "სამშაბათი";
        case 2:
            return "ოთხშაბათი";
        case 3:
            return "ხუთშაბათი";
        case 4:
            return "პარასკევი";
        case 5:
            return "შაბათი";
        case 6:
            return "კვირა";
    }
}
getNext7Days().forEach(function ([day, dayOfWeek]) {
    let dayBox = document.createElement("div");

    dayBox.classList.add("week__day");
    dayBox.innerHTML = day;
    weekBox.appendChild(dayBox);
    createClickListener(dayBox, dayOfWeek);
});

function createClickListener(dayBox, dayOfWeek) {
    dayBox.addEventListener("click", () => {
        clearSession();

        setTimeout(() => {
            displaySession(dayBox.innerHTML, dayOfWeek);
        }, 500);
    });
}
function createSessionClickListener(sessionItem, index, day, dayOfWeek) {
    sessionItem.addEventListener("click", () => {
        const itemList =
            localStorage.getItem(day) &&
            localStorage.getItem(day).split(",").includes(index.toString());
        if (!itemList) {
            localStorage.setItem(day, [index, ...[localStorage.getItem(day)]]);
            sessionItem.classList.add("red");
        } else {
            localStorage.setItem(day, [
                ...localStorage
                    .getItem(day)
                    .split(",")
                    .filter((item) => item != index.toString()),
            ]);
            sessionItem.classList.remove("red");
        }

        let picture = document.getElementById("picture-day");
        let pictureTitle = document.getElementById("picture-title");
        console.log(sessionItem, index, day, dayOfWeek)

        switch (day) {
            case "ორშაბათი":
                picture.src = data[0].monday[index].cover;
                pictureTitle.innerHTML = data[0].monday[index].title;
                break;
            case "სამშაბათი":
                picture.src = data[0].tuesday[index].cover;
                pictureTitle.innerHTML = data[0].tuesday[index].title;
                break;
            case "ოთხშაბათი":
                picture.src = data[0].wednesday[index].cover;
                pictureTitle.innerHTML = data[0].wednesday[index].title;
                break;
            case "ხუთშაბათი":
                picture.src = data[0].thursday[index].cover;
                pictureTitle.innerHTML = data[0].thursday[index].title;
                break;
            case "პარასკევი":
                picture.src = data[0].friday[index].cover;
                pictureTitle.innerHTML = data[0].friday[index].title;
                break;
            case "შაბათი":
                picture.src = data[0].saturday[index].cover;
                pictureTitle.innerHTML = data[0].saturday[index].title;
                break;
            case "კვირა":
                picture.src = data[0].sunday[index].cover;
                pictureTitle.innerHTML = data[0].sunday[index].title;
                break;
        }   
    });
}

function displaySession(day, dayOfWeek) {
    let sessionBox = document.querySelector(".session");
    sessionBox.style.left = "0%";
    const localArr =
        localStorage.getItem(day) && localStorage.getItem(day).split(",");
    const isArr = Array.isArray(localArr);
    if (dayOfWeek == 0 || dayOfWeek == 6) {
        weekEndDay.forEach((item, index) => {
            let sessionItem = document.createElement("button");
            sessionItem.classList.add("session_item");
            sessionItem.style.display = "block";
            if (isArr && localArr.includes(index.toString())) {
                sessionItem.classList.add("red");
            }

            sessionItem.innerHTML = item;
            createSessionClickListener(sessionItem, index, day, dayOfWeek);
            sessionBox.appendChild(sessionItem);
        });
    } else {
        normalDay.forEach((item, index) => {
            let sessionItem = document.createElement("button");
            sessionItem.classList.add("session_item");
            sessionItem.style.display = "block";
            sessionItem.innerHTML = item;
            if (isArr && localArr.includes(index.toString())) {
                sessionItem.classList.add("red");
            }
            createSessionClickListener(sessionItem, index, day, dayOfWeek);
            sessionBox.appendChild(sessionItem);
        });
    }
}
function clearSession() {
    let sessionBox = document.querySelector(".session");
    if (sessionBox.style.left == "") return;
    sessionBox.style.left = "-100%";

    setTimeout(() => {
        sessionBox.innerHTML = "";
    }, 500);

}


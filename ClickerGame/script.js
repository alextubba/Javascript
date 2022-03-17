let Mobs = {
    Wither: {
        Health: 50,
        Reward: 10,
        img: "/Mobs/Wither.png",
    },

    Person: {
        Health: 15,
        Reward: 5,
        img: "/Mobs/person.png",
    },

    Zombie: {
        Health: 5,
        Reward: 1,
        img: "/Mobs/Zombie.png",
    },
};

let MobNames = ["Wither", "Person", "Zombie"]

let Mob = document.getElementById("MobIcon");
let health = document.getElementById("Health");
let attack = document.getElementById("Attack");

let de = false;
let damage = 2;

let currentHealth = 0;
let currentMob = NaN;
let lastMob = NaN;

function SetNewMob() {
    Mob.style.display = "";

    let ranNum = Math.floor(Math.random() * MobNames.length);

    currentMob = Mobs[MobNames[ranNum]];

    if (currentMob == lastMob) {
        while (currentMob == lastMob) {
            ranNum = Math.floor(Math.random() * MobNames.length);

            currentMob = Mobs[MobNames[ranNum]]
        };
    };

    
    currentHealth = currentMob.Health;
    lastMob = currentMob;

    health.innerHTML = currentHealth + "/" + currentMob.Health;
    Mob.src = currentMob.img;
};

Mob.onclick = function() {
    if (de == false && currentMob) {
        de = true;
        currentHealth -= damage;

        health.innerHTML = currentHealth + "/" + currentMob.Health;

        if (currentHealth <= 0) {
            Mob.style.display = "none";
            SetNewMob()
        };
        de = false;
    };
};

SetNewMob()

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async () => {
    await sleep(3000)
    prompt("Give me a question after a one second wait")
}

repeatedGreetings()
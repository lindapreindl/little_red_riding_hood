const level2 = new Level(


    [
        new Werewolf(),
        new Werewolf(),
        new Werewolf(),
        new Werewolf(),
        new Werewolf(),
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundOject('img/background/5.png', -300, 0),
        new BackgroundOject('img/background/6.png', -300, 0),
        new BackgroundOject('img/background/7.png', -300, 0),

        new BackgroundOject('img/background/1.png', 0, 0),
        new BackgroundOject('img/background/2.png', 0, 0),
        new BackgroundOject('img/background/3.png', 0, 0),
        new BackgroundOject('img/background/4.png', 0, 0),
        new BackgroundOject('img/background/5.png', 300, 0),
        new BackgroundOject('img/background/6.png', 300, 0),
        new BackgroundOject('img/background/7.png', 300, 0),

        new BackgroundOject('img/background/1.png', 600, 0),
        new BackgroundOject('img/background/2.png', 600, 0),
        new BackgroundOject('img/background/3.png', 600, 0),
        new BackgroundOject('img/background/4.png', 600, 0),
        new BackgroundOject('img/background/5.png', 900, 0),
        new BackgroundOject('img/background/6.png', 900, 0),
        new BackgroundOject('img/background/7.png', 900, 0)
    ],
    [
        new Gems('img/crystals/Pink_crystal1.png', 300, 115),
        new Gems('img/crystals/Pink_crystal2.png', 650, 115)
    ],
    2,
    [
        new Tree('img/trees/winter_tree_10.png', 100, 36),
        new Tree('img/trees/winter_tree_8.png', 150, 36),
        new Tree('img/trees/middle_lane_tree_10.png', 150, 36)
    ]
);
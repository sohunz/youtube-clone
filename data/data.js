const data = [
    {
        title: "The new MacBook Pro | Apple",
        views: "39M",
        profile:
            "https://yt3.ggpht.com/05lhMeAH6tZrPIUsp2yHNz3DwzhKbDUQcxcY0_qeXVyZttR_pktBzw0FcLUSR6D4fVqsEgL3ZO0=s88-c-k-c0x00ffffff-no-rj",
        upload: "3 months ago",
        author: "Apple",
        thumbnail: "https://i.ytimg.com/vi/0pg_Y41waaE/maxresdefault.jpg",
    },
    {
        title: "Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max - Which Should You Buy?",
        views: "282K",
        profile:
            "https://yt3.ggpht.com/LdXq5jr6erm75Jyuc4nmvv3Mw26-fleabK9PwraePHQHQ8sOgdIuzSFnMRhTgKNoEp5mDOqY_g=s88-c-k-c0x00ffffff-no-rj",
        upload: "2 years ago",
        author: "The Tech Chap",
        thumbnail:
            "https://i.ytimg.com/vi/ChQl1u6YU7Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBcUlXm0C9hCAS0sjFDpOmAtUtxrA",
    },
    {
        title: "Samsung S24 Ultra vs iPhone 15 Pro Max Camera Battle!",
        views: "5.1M",
        profile:
            "https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s88-c-k-c0x00ffffff-no-rj",
        upload: "3 weeks ago",
        author: "Mrwhosetheboss",
        thumbnail: "https://i.ytimg.com/vi/btmeie5A4yE/maxresdefault.jpg",
    },

    {
        title: "React Native vs Flutter - I built the same chat app with both",
        views: "1.8M",
        profile:
            "https://yt3.ggpht.com/ytc/AIf8zZTUVa5AeFd3m5-4fdY2hEaKof3Byp8VruZ0f0FNEA=s88-c-k-c0x00ffffff-no-rj",
        upload: "2 years ago ",
        author: "Fireship",
        thumbnail: "https://i.ytimg.com/vi/X8ipUgXH6jw/maxresdefault.jpg",
    },
    {
        title: "AI Generated Videos Just Changed Forever",
        views: "3.3M",
        profile:
            "https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s88-c-k-c0x00ffffff-no-rj",
        upload: "1 day ago ",
        author: "Marques Brownlee",
        thumbnail: "https://i.ytimg.com/vi/NXpdyAWLDas/maxresdefault.jpg",
    },
    {
        title: "Actually, ChatGPT is INCREDIBLY Useful (15 Surprising Examples)",
        views: "98K",
        profile:
            "https://yt3.ggpht.com/ytc/AIf8zZRNQoDZDUq0J6anaOnhN65_Ht7YnVgRKwL1xDMnXA=s88-c-k-c0x00ffffff-no-rj",
        upload: " 8 days ago",
        author: "ThioJoe",
        thumbnail: "https://i.ytimg.com/vi/zIWqTJu9HaA/maxresdefault.jpg",
    },

    {
        title: "Ford Mustang SHELBY GT500 Review: The MADDEST Muscle Car! | 4K",
        views: "1.4M",
        profile:
            "https://yt3.ggpht.com/D2rVY0GIhAZZ_QfIupATCauaxNC45N3JuDY6pqrI75VByFEj3Ey62xdpGTF-OOsGr7kDGlorlg=s88-c-k-c0x00ffffff-no-rj",
        upload: "2 years ago",
        author: "AutoTrader",
        thumbnail: "https://i.ytimg.com/vi/D3RO2xNKS6s/maxresdefault.jpg",
    },

    {
        title: "Samsung Galaxy S24 Ultra TIPS, TRICKS & HIDDEN FEATURES!!",
        views: "251K",
        profile:
            "https://yt3.ggpht.com/pWEwr8e9zHy1ouYGkp5jW1LDI9lwiL88oXBp-Vhu2Y2YFUw3OrhIKqLjajUnXJAg3vcYiE_rWw=s88-c-k-c0x00ffffff-no-rj",
        upload: "2 weeks ago ",
        author: "Hayls World",
        thumbnail: "https://i.ytimg.com/vi/emrLEDH52e0/maxresdefault.jpg",
    },
    {
        title: "The GOOD And The BAD of Living with Old JDM Cars",
        views: "87K",
        profile:
            "https://yt3.ggpht.com/ytc/AIf8zZSXy3u7ymh_OjXNCnK70m5ltBgI0z2wsyBlacnk=s88-c-k-c0x00ffffff-no-rj",
        upload: "1 day ago",
        author: "NIGHTRIDE",
        thumbnail: "https://i.ytimg.com/vi/ApYl1EF5dNs/maxresdefault.jpg",
    },
    {
        title: "SOLO Car Tent Camping in the RAIN [ Relaxing, cosy rain shelter, ASMR ]",
        views: "25K",
        profile:
            "https://yt3.ggpht.com/ytc/AIf8zZTUy8vpaGO6DstYfJ-TICTuV6xqHHA4ulZ-NghdyA=s88-c-k-c0x00ffffff-no-rj",
        upload: "1 day ago",
        author: "Go4x4",
        thumbnail:
            "https://i.ytimg.com/vi/-wm71pIfT-s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB8wRVsVgyynoUvyoEmNqRIVIsaCw",
    },
    {
        title: "Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024",
        views: "12K",
        profile:
            "https://yt3.ggpht.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s88-c-k-c0x00ffffff-no-rj",
        upload: "4 days ago",
        author: "GreatStack",
        thumbnail: "https://i.ytimg.com/vi/Zb1zVeXLUf8/maxresdefault.jpg",
    },
    {
        title: "Samsung Galaxy S24 Unboxing - ASMR",
        views: "350K",
        profile:
            "https://yt3.ggpht.com/ytc/AIf8zZRM6z-pm8we7vob2akBnO91hwVHXpT4ViW-0DSBGg=s88-c-k-c0x00ffffff-no-rj",
        upload: "13 hours ago",
        author: "Dr Debox",
        thumbnail: "https://i.ytimg.com/vi/G_S2fPqGM_8/maxresdefault.jpg",
    },

    {
        title: "Trance",
        views: "16M",
        profile:
            "https://yt3.ggpht.com/ZAUGohPa0GCQWeGeclI_lCU-l_bSpf5wYARgbBZ6hkyt_mVPp_nGzTwW9LTosJjM6lY-eiy5Fg=s88-c-k-c0x00ffffff-no-rj",
        upload: "1 year ago",
        author: "Metro Boomin",
        thumbnail: "https://i.ytimg.com/vi/gHb6AEwNFBU/maxresdefault.jpg",
    },
    {
        title: "Freshhkiicks Nismo R35 GTR [4K]",
        views: "2.6M",
        profile:
            "https://yt3.ggpht.com/iEIqg8ysU7x7hUHuls-7U5SU7oyWkHEUR4FdzvSmg4PRTFaCrDOCp8j0X0Qk6WOb3JWJwKg-_w=s88-c-k-c0x00ffffff-no-rj",
        upload: "2 years ago",
        author: "Woyshnis Media",
        thumbnail: "https://i.ytimg.com/vi/Jvr0U2ZInoE/maxresdefault.jpg",
    },
    {
        title: "Hello Apple Vision Pro",
        views: "34M",
        profile:
            "https://yt3.ggpht.com/05lhMeAH6tZrPIUsp2yHNz3DwzhKbDUQcxcY0_qeXVyZttR_pktBzw0FcLUSR6D4fVqsEgL3ZO0=s88-c-k-c0x00ffffff-no-rj",
        upload: "2 weeks ago ",
        author: "Apple",
        thumbnail: "https://i.ytimg.com/vi/IY4x85zqoJM/maxresdefault.jpg",
    },
    {
        title: "Introducing Windows 11",
        views: "11M",
        profile:
            "https://yt3.ggpht.com/iKXHVtR-fLwbz17z4ikGr5nUG37KhCHMqBsqMm8y5K3fvqFqhkMS_7lN61frBDAU3k2qnqWu=s88-c-k-c0x00ffffff-no-rj",
        upload: "2 years ago",
        author: "Windows",
        thumbnail: "https://i.ytimg.com/vi/Uh9643c2P6k/maxresdefault.jpg",
    },
];

export default data;

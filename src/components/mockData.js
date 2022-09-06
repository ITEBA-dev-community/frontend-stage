const DataMock =
{
    id: 1,
    name: 'Milim Nava',
    gender: 'Perempuan',
    birthDate: '2017-01-01',
    profileImage: 'https://pm1.narvii.com/7181/86dc7ab549e19c7b53f6472d0464b28954d71f25r1-713-1000v2_hq.jpg',
    nim: 2121035,
    borrowing: [
        {
            id: 1,
            thumbnail: 'https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/37926673-gary-john-bishop-unfu-k-yourself-parsya-menshe-zhivi-bolshe.jpg',
            title: 'Unfuck Yourself',
            author: 'Gary John Bishop',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            deadline: '20 juli 2022'
        },
        {
            id: 2,
            thumbnail: 'https://gleegmjournal.com/wp-content/uploads/2021/04/rich-dad-poor-dad-cover.jpg',
            title: 'Rich Dad, Poor Dad',
            author: 'Robert Kiyosaki',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            deadline: '20 juli 2022'
        },
    ],
    history: [
        {   
            id: 1,
            thumbnail: 'https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/37926673-gary-john-bishop-unfu-k-yourself-parsya-menshe-zhivi-bolshe.jpg',
            title: 'Unfuck Yourself',
            author: 'Gary John Bishop',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            history: '20 juli 2022',
            url: '/'
        },
        {
            id: 2,
            thumbnail: 'https://gleegmjournal.com/wp-content/uploads/2021/04/rich-dad-poor-dad-cover.jpg',
            title: 'Rich Dad, Poor Dad',
            author: 'Robert Kiyosaki',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            history: '20 juli 2022',
            url: '/'
        },
        {
            id: 2,
            thumbnail: 'https://media.shortform.com/covers/png/atomic-habits-cover@8x.png',
            title: 'Atomic Habit',
            author: 'James Clear',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            history: '20 juli 2022',
            url: '/'
        }
    ],
    libary: [
        {
            id: '1',
            imgSrc: './assets/images/tutorialBerpikirBenar.jpg',
            title: 'Tutorial Berpikir Benar',
            subtitle: 'Karya Irwansyah Saputra'
        },
        {
            id: '2',
            imgSrc: './assets/images/belajarJavascript.jpg',
            title: 'Belajar Javascript',
            subtitle: 'Karya Muhamad Zulfikar'
        },
        {
            id: '3',
            imgSrc: './assets/images/belajarReact.png',
            title: 'Belajar ReactJs',
            subtitle: 'Karya Gohand Sitanggola'
        },
        {
            id: '4',
            imgSrc: './assets/images/belajarJavascript.jpg',
            title: 'DID Functional Multicipy',
            subtitle: 'Karya Yessica Mayasari'
        }
        ],
    recomendation: [
        {
            id: '1',
            imgSrc: './assets/images/tutorialBerpikirBenar.jpg',
            name: 'Tutorial Berpikir Benar'
        },
        {
            id: '2',
            imgSrc: './assets/images/belajarJavascript.jpg',
            name: 'Belajar Javascript'
        },
        {
            id: '3',
            imgSrc: './assets/images/belajarReact.png',
            name: 'Belajar JavaScript'
        }
    ],
    sidebar: [
        {
          name : 'FAQ',
          icon: '/assets/images/faq-icon.svg',
          target: '/faq'
        },
        {
          name: 'Hubungi Admin',
          icon: '/assets/images/admin-contact.svg',
          target: '/admin-contact'
        },
        {
          name: 'About',
          icon: '/assets/images/about-icon.svg',
          target: '/about'
        }
      ]
}
export default DataMock;
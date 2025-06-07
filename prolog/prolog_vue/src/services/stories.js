const default_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus ligula, non laoreet purus sagittis et. \
      Aenean dapibus sed augue nec hendrerit. Integer vehicula tincidunt vulputate. Nullam facilisis feugiat accumsan. Maecenas sit amet \
      dapibus nisl. Nam purus risus, facilisis in maximus nec, ultrices in nisi. Nam interdum viverra massa. Vestibulum in dolor massa. \
      Phasellus eu maximus justo. Aenean congue velit euismod sem congue molestie. Fusce felis justo, venenatis sit amet nulla id, placerat \
      interdum leo.<br/><br/>\
      Curabitur a sapien quis risus blandit congue nec nec neque. Nam suscipit, mauris sed ullamcorper venenatis, erat nibh pellentesque arcu, \
      sed porta nulla libero non tortor. Nullam elementum ac massa sed tristique. Mauris ultricies nunc non nibh aliquam tristique. Etiam mollis \
      ultrices odio. Duis ultrices eget diam ac egestas. Phasellus venenatis vitae est ut imperdiet. Etiam eleifend viverra velit vitae iaculis. \
      Mauris a lacus sodales, aliquam ipsum sit amet, interdum justo. Cras dapibus dolor vitae dui accumsan, in porta mi vehicula. Duis sit amet \
      faucibus metus. Duis commodo rutrum odio non dapibus.<br/><br/>\
      \Integer dictum arcu eu augue posuere lacinia. Fusce ut ipsum ornare dui facilisis pellentesque. Nullam pulvinar magna eget quam tempor, vel \
      dignissim felis mattis. Donec molestie lobortis ex scelerisque consectetur. Integer erat sem, eleifend vitae tristique eget, mollis non nibh. \
      Mauris tellus massa, feugiat nec egestas non, blandit vitae turpis. Donec volutpat pellentesque diam, vitae vestibulum neque commodo at. \
      Vivamus tristique enim quis magna tempor, sit amet vulputate nibh sagittis. Morbi vitae metus viverra, bibendum mi vel, imperdiet ipsum. \
      Nunc venenatis, ex ac venenatis volutpat, diam velit molestie ante, non euismod sapien sapien ut risus. Pellentesque facilisis nisi rutrum \
      velit porta, vitae varius turpis mattis. Maecenas non congue lectus. Vivamus sed dignissim mi. Sed tempor tellus est. Fusce magna lectus, \
      pharetra nec tortor nec, eleifend malesuada ante.<br/><br/>\
      Donec venenatis ante vitae dui vehicula, et congue nibh rutrum. Nunc facilisis risus enim, sed bibendum neque dapibus vel. Aenean non \
      auctor massa. Etiam venenatis risus augue, vitae malesuada ex placerat dapibus. Mauris at finibus nisi. Cras sagittis libero ac lorem luctus \
      fermentum. Cras molestie bibendum ex, rhoncus pretium quam varius ac. Nullam vitae quam et arcu posuere lacinia. Phasellus varius auctor \
      massa, eget hendrerit neque tempus feugiat. In hac habitasse platea dictumst. Ut non faucibus est. Curabitur in facilisis est, nec porta \
      dolor. Duis imperdiet magna ut bibendum vestibulum. Duis malesuada neque eget justo ultricies, a dapibus risus aliquam. Praesent \
      pretium purus tempor nisi rutrum imperdiet.<br/><br/>\
      Suspendisse vitae mi eget lacus ullamcorper elementum a et mauris. Pellentesque vel tellus a nulla placerat malesuada. Duis at arcu \
      at velit viverra tincidunt. Sed luctus luctus velit, sed pellentesque magna tincidunt sit amet. Phasellus non hendrerit sem. Phasellus \
      congue mi in erat blandit venenatis. Vivamus id leo magna."
const chapters = [
  {
    id: 1,
    number: 1,
    name: "Aenean congue velit euismod sem congue molestie",
    date_of_creation: "2007-07-07T01:58:07.766117+05:00", date_of_editing: "2009-10-24T01:58:07.766117+05:00",
    first_comment: "Donec volutpat pellentesque diam, vitae vestibulum neque commodo at. \
                  Vivamus tristique enim quis magna tempor, sit amet vulputate nibh sagittis. \
                  Morbi vitae metus viverra, bibendum mi vel, imperdiet ipsum.",
    end_comment: "Vivamus tristique enim quis magna tempor, sit amet vulputate nibh sagittis. \
                  Morbi vitae metus viverra, bibendum mi vel, imperdiet ipsum.",
    comments: [],
    text: default_text
  },
  {
    id: 2,
    number: 2,
    name: "Nam suscipit, mauris sed ullamcorper",
    date_of_creation: "2007-07-07T01:58:07.766117+05:00", date_of_editing: "2009-10-24T01:58:07.766117+05:00",
    first_comment: "Curabitur a sapien quis risus blandit congue nec nec neque. Nam suscipit, \
                  mauris sed ullamcorper venenatis, erat nibh pellentesque arcu, \
                  sed porta nulla libero non tortor. Nullam elementum ac massa sed tristique. \
                  Mauris ultricies nunc non nibh aliquam tristique. Etiam mollis \
                  ultrices odio. Duis ultrices eget diam ac egestas. Phasellus venenatis vitae est ut imperdiet.",
    end_comment: "Nam suscipit, \
                  mauris sed ullamcorper venenatis, erat nibh pellentesque arcu, \
                  sed porta nulla libero non tortor. Nullam elementum ac massa sed tristique. \
                  Mauris ultricies nunc non nibh aliquam tristique. Etiam mollis \
                  ultrices odio. Duis ultrices eget diam ac egestas. Phasellus venenatis vitae est ut imperdiet.",
    comments: [],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus ligula, non laoreet purus sagittis et. \
      Aenean dapibus sed augue nec hendrerit. Integer vehicula tincidunt vulputate. Nullam facilisis feugiat accumsan. Maecenas sit amet \
      dapibus nisl. Nam purus risus, facilisis in maximus nec, ultrices in nisi. Nam interdum viverra massa. Vestibulum in dolor massa. \
      Phasellus eu maximus justo. Aenean congue velit euismod sem congue molestie. Fusce felis justo, venenatis sit amet nulla id, placerat \
      interdum leo.<br/><br/>\
      <u>Curabitur a sapien quis risus</u> blandit congue nec nec neque. Nam suscipit, mauris sed ullamcorper venenatis, erat nibh pellentesque arcu, \
      sed porta nulla libero non tortor. Nullam elementum ac massa sed tristique. Mauris ultricies nunc non nibh aliquam tristique. Etiam mollis \
      ultrices odio. Duis ultrices eget diam ac egestas. Phasellus venenatis vitae est ut imperdiet. Etiam eleifend viverra velit vitae iaculis. \
      Mauris a lacus sodales, aliquam ipsum sit amet, interdum justo. Cras dapibus dolor vitae dui accumsan, in porta mi vehicula. Duis sit amet \
      faucibus metus. Duis commodo rutrum odio non dapibus.<br/><br/>\
      \Integer dictum arcu eu augue posuere lacinia. Fusce ut ipsum ornare dui facilisis pellentesque. Nullam pulvinar magna eget quam tempor, vel \
      dignissim felis mattis. <u>Donec molestie lobortis ex scelerisque consectetur</u>. Integer erat sem, eleifend vitae tristique eget, mollis non nibh. \
      Mauris tellus massa, feugiat nec egestas non, blandit vitae turpis. Donec volutpat pellentesque diam, vitae vestibulum neque commodo at. \
      Vivamus tristique enim quis magna tempor, sit amet vulputate nibh sagittis. Morbi vitae metus viverra, bibendum mi vel, imperdiet ipsum. \
      Nunc venenatis, ex ac venenatis volutpat, diam velit molestie ante, non euismod sapien sapien ut risus. Pellentesque facilisis nisi rutrum \
      velit porta, vitae varius turpis mattis. Maecenas non congue lectus. Vivamus sed dignissim mi. Sed tempor tellus est. Fusce magna lectus, \
      pharetra nec tortor nec, eleifend malesuada ante.<br/><br/>\
      Donec venenatis ante vitae dui vehicula, et congue nibh rutrum. Nunc facilisis risus enim, sed bibendum neque dapibus vel. Aenean non \
      auctor massa. Etiam venenatis risus augue, vitae malesuada ex placerat dapibus. Mauris at finibus nisi. Cras sagittis libero ac lorem luctus \
      fermentum. <u>Cras molestie bibendum ex, rhoncus pretium quam varius ac. Nullam vitae quam et arcu posuere lacinia. Phasellus varius auctor \
      massa, eget hendrerit neque tempus feugiat</u>. In hac habitasse platea dictumst. Ut non faucibus est. Curabitur in facilisis est, nec porta \
      dolor. Duis imperdiet magna ut bibendum vestibulum. Duis malesuada neque eget justo ultricies, a dapibus risus aliquam. Praesent \
      pretium purus tempor nisi rutrum imperdiet.<br/><br/>\
      Suspendisse vitae mi eget lacus ullamcorper elementum a et mauris. Pellentesque vel tellus a nulla placerat malesuada. Duis at arcu \
      at velit viverra tincidunt. Sed luctus luctus velit, sed pellentesque magna tincidunt sit amet. Phasellus non hendrerit sem. Phasellus \
      congue mi in erat blandit venenatis. Vivamus id leo magna."
  },
  {
    id: 3,
    number: 3,
    name: "Duis malesuada neque eget justo ultricies",
    date_of_creation: "2007-07-07T01:58:07.766117+05:00", date_of_editing: "2009-10-24T01:58:07.766117+05:00",
    first_comment: "Duis imperdiet magna ut bibendum vestibulum. Duis malesuada \
                  neque eget justo ultricies, a dapibus risus aliquam. Praesent \
                  pretium purus tempor nisi rutrum imperdiet.",
    end_comment: "a dapibus risus aliquam. Praesent \
                  pretium purus tempor nisi rutrum imperdiet.",
    comments: [],
    text: "<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus ligula, non laoreet purus sagittis et. \
      Aenean dapibus sed augue nec hendrerit. Integer vehicula tincidunt vulputate. Nullam facilisis feugiat accumsan. Maecenas sit amet \
      dapibus nisl. Nam purus risus, facilisis in maximus nec, ultrices in nisi. Nam interdum viverra massa. Vestibulum in dolor massa. \
      Phasellus eu maximus justo. Aenean congue velit euismod sem congue molestie. Fusce felis justo, venenatis sit amet nulla id, placerat \
      interdum leo.</b><br/><br/>\
      Curabitur <span style='color: aqua;'>a sapien quis risus blandit congue nec nec neque</span>. Nam suscipit, mauris sed ullamcorper venenatis, erat nibh pellentesque arcu, \
      sed porta nulla libero non tortor. Nullam elementum ac massa sed tristique. Mauris ultricies nunc non nibh aliquam tristique. Etiam mollis \
      ultrices odio. Duis ultrices eget diam ac egestas. Phasellus venenatis vitae est ut imperdiet. Etiam eleifend viverra velit vitae iaculis. \
      Mauris a lacus sodales, aliquam ipsum sit amet, interdum justo. Cras dapibus dolor vitae dui accumsan, in porta mi vehicula. Duis sit amet \
      faucibus metus. Duis commodo rutrum odio non dapibus.<br/><br/>\
      \Integer dictum arcu eu augue posuere lacinia. Fusce ut ipsum ornare dui facilisis pellentesque. Nullam pulvinar magna eget quam tempor, vel \
      dignissim felis mattis. Donec molestie lobortis ex scelerisque consectetur. Integer erat sem, eleifend vitae tristique eget, mollis non nibh. \
      Mauris tellus massa, feugiat nec egestas non, blandit vitae turpis. Donec volutpat pellentesque diam, vitae vestibulum neque commodo at. \
      Vivamus tristique enim quis magna tempor, sit amet vulputate nibh sagittis. Morbi vitae metus viverra, bibendum mi vel, imperdiet ipsum. \
      Nunc venenatis, ex ac venenatis volutpat, diam velit molestie ante, non euismod sapien sapien ut risus. Pellentesque facilisis nisi rutrum \
      velit porta, vitae varius turpis mattis. Maecenas non congue lectus. Vivamus sed dignissim mi. Sed tempor tellus est. Fusce magna lectus, \
      pharetra nec tortor nec, eleifend malesuada ante.<br/><br/>\
      Donec venenatis ante vitae dui vehicula, et congue nibh rutrum. Nunc facilisis risus enim, sed bibendum neque dapibus vel. Aenean non \
      auctor massa. Etiam venenatis risus augue, vitae malesuada ex placerat dapibus. Mauris at finibus nisi. Cras sagittis libero ac lorem luctus \
      fermentum. <b>Cras molestie bibendum ex</b>, rhoncus pretium quam varius ac. Nullam vitae quam et arcu posuere lacinia. Phasellus varius auctor \
      massa, eget hendrerit neque tempus feugiat. In hac habitasse platea dictumst. <b><u>Ut non faucibus est.</u></b> Curabitur in facilisis est, nec porta \
      dolor. Duis imperdiet magna ut bibendum vestibulum. Duis malesuada neque eget justo ultricies, a dapibus risus aliquam. Praesent \
      pretium purus tempor nisi rutrum imperdiet.<br/><br/>\
      Suspendisse vitae mi eget lacus ullamcorper elementum a et mauris. Pellentesque vel tellus a nulla placerat malesuada. Duis at arcu \
      at velit viverra tincidunt. Sed luctus luctus velit, sed pellentesque magna tincidunt sit amet. Phasellus non hendrerit sem. Phasellus \
      congue mi in erat blandit venenatis. Vivamus id leo magna."
  },
  {
    id: 4,
    number: 4,
    name: "Praesent pretium purus",
    date_of_creation: "2007-07-07T01:58:07.766117+05:00", date_of_editing: "2009-10-24T01:58:07.766117+05:00",
    first_comment: "Duis imperdiet magna ut bibendum vestibulum. Duis malesuada \
                  neque eget justo ultricies, a dapibus risus aliquam. Praesent \
                  pretium purus tempor nisi rutrum imperdiet.",
    end_comment: null,
    comments: [],
    text: "Lorem",
  },
  {
    id: 5, number: 5, name: "Praesent pretium purus", date_of_creation: "2007-07-07T01:58:07.766117+05:00", date_of_editing: "2009-10-24T01:58:07.766117+05:00",
    first_comment: null, end_comment: null, comments: [], text: "Lorem",
  },
]

for (let i = 6; i < 31; i++) {
  chapters.push(
    {
      id: i, number: i, name: "Praesent pretium purus", date_of_creation: "2007-07-07T01:58:07.766117+05:00", date_of_editing: "2009-10-24T01:58:07.766117+05:00",
      first_comment: "Duis imperdiet magna ut bibendum vestibulum. Duis malesuada \
                  neque eget justo ultricies, a dapibus risus aliquam. Praesent \
                  pretium purus tempor nisi rutrum imperdiet.", 
      end_comment: "Nullam elementum ac massa sed tristique. \
                    Mauris ultricies nunc non nibh aliquam tristique.", 
      comments: [], text: default_text,
    }
  )
}

export const works = [
    { id: 991,
      name: "Возвращение в Оксфорд",
      type_details: { id: 1, name: "Оригинальная работа" }, 
      translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "Дороти Ли Сэйерс",
      fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ],
      date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2025-03-21T19:22:16.497606+05:00",
      rating_details: { id: 1, name: "G"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       },
      size_details: {
        "id": 3,
        "name": "Миди",
        "description": "Более развернутый сюжет, может иметь главы. Содержит 8–30 страниц (4 000–15 000 слов)"
      },
      genres_details: [
        { id: 1, name: 'Повседневность', description: 'genre description', mark: false },
        { id: 2, name: 'Драма', description: 'genre description', mark: false },
        { id: 3, name: 'Детектив', description: 'genre description', mark: false },
        { id: 4, name: 'Попаданчество', description: 'genre description', mark: false },
        { id: 5, name: 'Путешествия', description: 'genre description', mark: false },
        { id: 6, name: 'Студенты', description: 'genre description', mark: false },
        { id: 7, name: 'Амнезия', description: 'genre description', mark: false },
        { id: 8, name: 'Повествование от первого лица', description: 'genre description', mark: false },
        { id: 9, name: 'Счастливый конец', description: 'genre description', mark: false },
      ],
      status_details: { id: 1, name: "в процессе"}, relationships: ["персонаж 1 / персонаж 2", "персонаж 3 / персонаж 4"],
      tags: ["Попаданчество", "Путешествия", "Студенты", "Амнезия", "Повествование от первого лица", "Счастливый конец"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elit ut risus luctus hendrerit. \
                      Cras sed feugiat mi. Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, \
                      interdum libero in, fringilla purus. Fusce porta molestie porttitor.",
      img_url: "https://images.unsplash.com/photo-1709566967168-42d00259a413?q=80&w=1974&auto=format&fit=crop&ixlib=\
                rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      read: true,
      chapters: chapters,
      text: "Lorem ipsum",
      },
  
    {  id: 992,
      name: "Тайная история",
      type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "Донна Тартт",
      fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ],
      date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2025-03-21T19:22:16.497606+05:00",
      rating_details: { id: 1, name: "G"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       },
      size_details: {
        "id": 3,
        "name": "Миди",
        "description": "Более развернутый сюжет, может иметь главы. Содержит 8–30 страниц (4 000–15 000 слов)"
      },
      genres_details: [{ id: 1, name: 'Повседневность', description: 'genre description', mark: false },
        { id: 2, name: 'Драма', description: 'genre description', mark: false },
        { id: 3, name: 'Детектив', description: 'genre description', mark: false },],
      status_details: { id: 1, name: "в процессе"}, relationships: ["персонаж 1 / персонаж 2", "персонаж 3 / персонаж 4"],
      tags: ["Попаданчество", "Путешествия", "Студенты", "Амнезия", "Повествование от первого лица", "Счастливый конец"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elit ut risus luctus hendrerit. \
                      Cras sed feugiat mi. Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, \
                      interdum libero in, fringilla purus. Fusce porta molestie porttitor.",
      img_url: "https://cdn1.ozone.ru/s3/multimedia-k/6146737028.jpg",
      read: false,
      chapters: chapters,
      text: "Lorem ipsum",
    },
  
    {  id: 993,
      name: "Название произведения ааааааа ааа аа а а аааааааа ааа а а аааааааа аааааа",
      type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "eclipsa2001",
      fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"}, 
                        { id: 2, name: "Звёздные войны", description: "Люк, я твой отец."} ],
      date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2025-03-21T19:22:16.497606+05:00",
      rating_details: { id: 1, name: "G"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       },
      size_details: {
        "id": 3,
        "name": "Миди",
        "description": "Более развернутый сюжет, может иметь главы. Содержит 8–30 страниц (4 000–15 000 слов)"
      },
      genres_details: [{ id: 1, name: 'Повседневность', description: 'genre description', mark: false },
        { id: 2, name: 'Драма', description: 'genre description', mark: false },
        { id: 3, name: 'Детектив', description: 'genre description', mark: false },],
      status_details: { id: 1, name: "в процессе"}, relationships: ["персонаж 1 / персонаж 2", "персонаж 3 / персонаж 4"],
      tags: ["AU - кофейня", "Попаданчество", "Путешествия", "Студенты", "Амнезия", "Повествование от первого лица", "Счастливый конец"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elit ut risus luctus hendrerit. \
                      Cras sed feugiat mi. Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, \
                      interdum libero in, fringilla purus. Fusce porta molestie porttitor.",
      img_url: "https://images.unsplash.com/photo-1627551445215-913b7e45c60b?q=80&w=2030&auto=format&fit=crop&ixlib=\
                rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      read: true,
      chapters: chapters,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus ligula, non laoreet purus sagittis et. \
      Aenean dapibus sed augue nec hendrerit. Integer vehicula tincidunt vulputate. Nullam facilisis feugiat accumsan. Maecenas sit amet \
      dapibus nisl. Nam purus risus, facilisis in maximus nec, ultrices in nisi. Nam interdum viverra massa. Vestibulum in dolor massa. \
      Phasellus eu maximus justo. Aenean congue velit euismod sem congue molestie. Fusce felis justo, venenatis sit amet nulla id, placerat \
      interdum leo.",
    },
    {  id: 994,
      name: "Осенняя хандра",
      type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "eclipsa2001",
      fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ],
      date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2024-04-21T19:22:16.497606+05:00",
      rating_details: { id: 2, name: "PG-13"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       },
      size_details: {
        "id": 1,
        "name": "Драббл",
        "description": "Очень короткий фрагмент, момент, сцена. До 1 страницы (~500 слов)" 
       },
      genres_details: [],
      status_details: { id: 1, name: "в процессе"}, relationships: "",
      tags: [],
      description: "",
      img_url: "https://images.unsplash.com/photo-1633331585737-1f400d0ab96f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3\
                &ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      read: false,
      chapters: [],
      text: "",
    },
    {  id: 995, name: "Dark Academia", type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "eclipsa2001", fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ], date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2024-04-21T19:22:16.497606+05:00", rating_details: { id: 2, name: "PG-13"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       }, size_details: {
        "id": 1,
        "name": "Драббл",
        "description": "Очень короткий фрагмент, момент, сцена. До 1 страницы (~500 слов)" 
       }, genres_details: [], status_details: { id: 1, name: "в процессе"}, relationships: "", tags: [],
      description: "", 
      img_url: "https://images.unsplash.com/photo-1600189261935-a7666a7ef306?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3\
                &ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      read: false, chapters: [], text: "",
    },
    {  id: 996, name: "6", type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "", fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ], date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2024-04-21T19:22:16.497606+05:00", rating_details: { id: 2, name: "PG-13"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       }, size_details: {
        "id": 1,
        "name": "Драббл",
        "description": "Очень короткий фрагмент, момент, сцена. До 1 страницы (~500 слов)" 
       }, genres_details: [], status_details: { id: 1, name: "в процессе"}, relationships: "", tags: [],
      description: "", 
      img_url: "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?q=80&w=1974\
                &auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by\
                1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      read: false, chapters: [], text: "",
    },
    {  id: 997, name: "7", type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "", fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ], date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2024-04-21T19:22:16.497606+05:00", rating_details: { id: 2, name: "PG-13"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       }, size_details: {
        "id": 1,
        "name": "Драббл",
        "description": "Очень короткий фрагмент, момент, сцена. До 1 страницы (~500 слов)" 
       }, genres_details: [], status_details: { id: 1, name: "в процессе"}, relationships: "", tags: [],
      description: "", 
      img_url: "https://m.media-amazon.com/images/I/71l9WWa-rXL._AC_UF1000,1000_QL80_.jpg", 
      read: false, chapters: [], text: "",
    },
    {  id: 998, name: "8", type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "", fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ], date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2024-04-21T19:22:16.497606+05:00", rating_details: { id: 2, name: "PG-13"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       }, size_details: {
        "id": 1,
        "name": "Драббл",
        "description": "Очень короткий фрагмент, момент, сцена. До 1 страницы (~500 слов)" 
       }, genres_details: [], status_details: { id: 1, name: "в процессе"}, relationships: "", tags: [],
      description: "", 
      img_url: "https://m.media-amazon.com/images/I/71l9WWa-rXL._AC_UF1000,1000_QL80_.jpg", 
      read: false, chapters: [], text: "",
    },
    {  id: 999, name: "9", type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "", fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ], date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2024-04-21T19:22:16.497606+05:00", rating_details: { id: 2, name: "PG-13"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       }, size_details: {
        "id": 1,
        "name": "Драббл",
        "description": "Очень короткий фрагмент, момент, сцена. До 1 страницы (~500 слов)" 
       }, genres_details: [], status_details: { id: 1, name: "в процессе"}, relationships: "", tags: [],
      description: "", 
      img_url: "https://m.media-amazon.com/images/I/71l9WWa-rXL._AC_UF1000,1000_QL80_.jpg", 
      read: false, chapters: [], text: "",
    },
    {  id: 9910, name: "10", type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "", fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ], date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2024-04-21T19:22:16.497606+05:00", rating_details: { id: 2, name: "PG-13"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       }, size_details: {
        "id": 1,
        "name": "Драббл",
        "description": "Очень короткий фрагмент, момент, сцена. До 1 страницы (~500 слов)" 
       }, genres_details: [], status_details: { id: 1, name: "в процессе"}, relationships: "", tags: [],
      description: "", 
      img_url: "https://m.media-amazon.com/images/I/71l9WWa-rXL._AC_UF1000,1000_QL80_.jpg", 
      read: false, chapters: [], text: "",
    },
    {  id: 9911, name: "11", type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "", fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ], date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2024-04-21T19:22:16.497606+05:00", rating_details: { id: 2, name: "PG-13"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       }, size_details: {
        "id": 1,
        "name": "Драббл",
        "description": "Очень короткий фрагмент, момент, сцена. До 1 страницы (~500 слов)" 
       }, genres_details: [], status_details: { id: 1, name: "в процессе"}, relationships: "", tags: [],
      description: "", img_url: "https://cdn1.ozone.ru/s3/multimedia-k/6146737028.jpg", read: false, chapters: [], text: "",
    },
    {  id: 9912, name: "12", type_details: { id: 1, name: "Оригинальная работа" },  translation: false, author_original: "оригинальный автор", original: "название оригинала", author: "", fandom_details: [ { id: 1, name: "Гарри Поттер", description: "Ты волшебник, Гарри!"} ], date_of_creation: "2009-01-01T19:22:16.497606+05:00", date_of_editing: "2024-04-21T19:22:16.497606+05:00", rating_details: { id: 2, name: "PG-13"},
      orientation_details: {
        "id": 1,
        "name": "Джен",
        "description": "В работе отсутствует романтическая линия или она не является значимой частью сюжета"
       }, size_details: {
        "id": 1,
        "name": "Драббл",
        "description": "Очень короткий фрагмент, момент, сцена. До 1 страницы (~500 слов)" 
       }, genres_details: [], status_details: { id: 1, name: "в процессе"}, relationships: "", tags: [],
      description: "", img_url: "", read: false, chapters: [], text: "",
    },
];

export default chapters;
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
    title: "Aenean congue velit euismod sem congue molestie",
    date: new Date("2025-03-21"),
    notes_before: "Donec volutpat pellentesque diam, vitae vestibulum neque commodo at. \
                  Vivamus tristique enim quis magna tempor, sit amet vulputate nibh sagittis. \
                  Morbi vitae metus viverra, bibendum mi vel, imperdiet ipsum.",
    notes_after: "Vivamus tristique enim quis magna tempor, sit amet vulputate nibh sagittis. \
                  Morbi vitae metus viverra, bibendum mi vel, imperdiet ipsum.",
    comments: [],
    text: default_text
  },
  {
    id: 2,
    number: 2,
    title: "Nam suscipit, mauris sed ullamcorper",
    date: new Date("2025-03-22"),
    notes_before: "Curabitur a sapien quis risus blandit congue nec nec neque. Nam suscipit, \
                  mauris sed ullamcorper venenatis, erat nibh pellentesque arcu, \
                  sed porta nulla libero non tortor. Nullam elementum ac massa sed tristique. \
                  Mauris ultricies nunc non nibh aliquam tristique. Etiam mollis \
                  ultrices odio. Duis ultrices eget diam ac egestas. Phasellus venenatis vitae est ut imperdiet.",
    notes_after: "Nam suscipit, \
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
    title: "Duis malesuada neque eget justo ultricies",
    date: new Date("2025-03-23"),
    notes_before: "Duis imperdiet magna ut bibendum vestibulum. Duis malesuada \
                  neque eget justo ultricies, a dapibus risus aliquam. Praesent \
                  pretium purus tempor nisi rutrum imperdiet.",
    notes_after: "a dapibus risus aliquam. Praesent \
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
    title: "Praesent pretium purus",
    date: new Date("2025-03-25"),
    notes_before: "Duis imperdiet magna ut bibendum vestibulum. Duis malesuada \
                  neque eget justo ultricies, a dapibus risus aliquam. Praesent \
                  pretium purus tempor nisi rutrum imperdiet.",
    notes_after: null,
    comments: [],
    text: "Lorem",
  },
  {
    id: 5, number: 5, title: "Praesent pretium purus", date: new Date("2025-03-25"),
    notes_before: null, notes_after: null, comments: [], text: "Lorem",
  },
]

for (let i = 6; i < 31; i++) {
  chapters.push(
    {
      id: i, number: i, title: "Praesent pretium purus", date: new Date("2025-03-25"),
      notes_before: "Duis imperdiet magna ut bibendum vestibulum. Duis malesuada \
                  neque eget justo ultricies, a dapibus risus aliquam. Praesent \
                  pretium purus tempor nisi rutrum imperdiet.", 
      notes_after: "Nullam elementum ac massa sed tristique. \
                    Mauris ultricies nunc non nibh aliquam tristique.", 
      comments: [], text: default_text,
    }
  )
}

export const works = [
    { id: 1,
      title: "Возвращение в Оксфорд",
      author: "Дороти Ли Сэйерс",
      fandom: "оригинальная работа",
      last_update: "21.03.2025",
      rating: "NC-17",
      direction: "слэш",
      size: "миди",
      genres: ["Детектив", "Драма", "Повседневность"],
      relationships: ["персонаж 1 / персонаж 2", "персонаж 3 / персонаж 4"],
      tags: ["Попаданчество", "Путешествия", "Студенты", "Амнезия", "Повествование от первого лица", "Счастливый конец"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elit ut risus luctus hendrerit. \
                      Cras sed feugiat mi. Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, \
                      interdum libero in, fringilla purus. Fusce porta molestie porttitor.",
      img_url: "https://images.unsplash.com/photo-1709566967168-42d00259a413?q=80&w=1974&auto=format&fit=crop&ixlib=\
                rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      read: true,
      chapters: chapters,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus ligula, non laoreet purus sagittis et. \
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
      congue mi in erat blandit venenatis. Vivamus id leo magna.",
      },
  
    {  id: 2,
      title: "Тайная история",
      author: "Донна Тартт",
      fandom: "оригинальная работа",
      last_update: "21.03.2025",
      rating: "NC-17",
      direction: "слэш",
      size: "миди",
      genres: ["Детектив", "Драма", "Повседневность"],
      relationships: ["персонаж 1 / персонаж 2", "персонаж 3 / персонаж 4"],
      tags: ["Попаданчество", "Путешествия", "Студенты", "Амнезия", "Повествование от первого лица", "Счастливый конец"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elit ut risus luctus hendrerit. \
                      Cras sed feugiat mi. Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, \
                      interdum libero in, fringilla purus. Fusce porta molestie porttitor.",
      img_url: "https://cdn1.ozone.ru/s3/multimedia-k/6146737028.jpg",
      read: false,
      chapters: chapters,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus ligula, non laoreet purus sagittis et. \
      Aenean dapibus sed augue nec hendrerit. Integer vehicula tincidunt vulputate. Nullam facilisis feugiat accumsan. Maecenas sit amet \
      dapibus nisl. Nam purus risus, facilisis in maximus nec, ultrices in nisi. Nam interdum viverra massa. Vestibulum in dolor massa. \
      Phasellus eu maximus justo. Aenean congue velit euismod sem congue molestie. Fusce felis justo, venenatis sit amet nulla id, placerat \
      interdum leo.",
    },
  
    {  id: 3,
      title: "Название произведения ааааааа ааа аа а а аааааааа ааа а а аааааааа аааааа",
      author: "eclipsa2001",
      fandom: "оригинальная работа",
      last_update: "21.03.2025",
      rating: "NC-17",
      direction: "слэш",
      size: "миди",
      genres: ["Детектив", "Драма", "Повседневность"],
      relationships: ["персонаж 1 / персонаж 2", "персонаж 3 / персонаж 4"],
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
    {  id: 4,
      title: "Осенняя хандра",
      author: "eclipsa2001",
      fandom: "",
      last_update: "",
      rating: "",
      direction: "",
      size: "",
      genres: "",
      relationships: "",
      tags: [],
      description: "",
      img_url: "https://images.unsplash.com/photo-1633331585737-1f400d0ab96f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3\
                &ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      read: false,
      chapters: [],
      text: "",
    },
    {  id: 5, title: "Dark Academia", author: "eclipsa2001", fandom: "", last_update: "", rating: "",
      direction: "", size: "", genres: "", relationships: "", tags: [],
      description: "", 
      img_url: "https://images.unsplash.com/photo-1600189261935-a7666a7ef306?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3\
                &ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      read: false, chapters: [], text: "",
    },
    {  id: 6, title: "6", author: "", fandom: "", last_update: "", rating: "",
      direction: "", size: "", genres: "", relationships: "", tags: [],
      description: "", 
      img_url: "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?q=80&w=1974\
                &auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by\
                1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      read: false, chapters: [], text: "",
    },
    {  id: 7, title: "7", author: "", fandom: "", last_update: "", rating: "",
      direction: "", size: "", genres: "", relationships: "", tags: [],
      description: "", 
      img_url: "https://m.media-amazon.com/images/I/71l9WWa-rXL._AC_UF1000,1000_QL80_.jpg", 
      read: false, chapters: [], text: "",
    },
    {  id: 8, title: "8", author: "", fandom: "", last_update: "", rating: "",
      direction: "", size: "", genres: "", relationships: "", tags: [],
      description: "", 
      img_url: "https://m.media-amazon.com/images/I/71l9WWa-rXL._AC_UF1000,1000_QL80_.jpg", 
      read: false, chapters: [], text: "",
    },
    {  id: 9, title: "9", author: "", fandom: "", last_update: "", rating: "",
      direction: "", size: "", genres: "", relationships: "", tags: [],
      description: "", 
      img_url: "https://m.media-amazon.com/images/I/71l9WWa-rXL._AC_UF1000,1000_QL80_.jpg", 
      read: false, chapters: [], text: "",
    },
    {  id: 10, title: "10", author: "", fandom: "", last_update: "", rating: "",
      direction: "", size: "", genres: "", relationships: "", tags: [],
      description: "", 
      img_url: "https://m.media-amazon.com/images/I/71l9WWa-rXL._AC_UF1000,1000_QL80_.jpg", 
      read: false, chapters: [], text: "",
    },
    {  id: 11, title: "11", author: "", fandom: "", last_update: "", rating: "",
      direction: "", size: "", genres: "", relationships: "", tags: [],
      description: "", img_url: "https://cdn1.ozone.ru/s3/multimedia-k/6146737028.jpg", read: false, chapters: [], text: "",
    },
    {  id: 12, title: "12", author: "", fandom: "", last_update: "", rating: "",
      direction: "", size: "", genres: "", relationships: "", tags: [],
      description: "", img_url: "", read: false, chapters: [], text: "",
    },
]

/* async function fetchWorks() {
  return works;
}
export { works, fetchWorks }; */
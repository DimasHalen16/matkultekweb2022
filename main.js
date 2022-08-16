Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "M. Rezky Septiodimas Halen  ",
        description:
          "Saya mahasiswa dari Universitas Ahmad Dahlan Yogyakarta",
        social: {
          ig: {
            url: "https://instagram.com/halennn___?igshid=YmMyMTA2M2Y=",
            title: "halennn___",
          },
          fb: {
            url: "#",
            title: "DimasHalen16",
          },
        },
        imageProfile:
          "dimas1.jpeg",
        },

        table:{
          tjudul:"TABEL KETERAMPILAN",
          th:["No.","Skill","Keterampilan"],
          tr:[
            {
              "k":"Python",
              "s":"Beginner"
            },
            {
              "k":"C++",
              "s":"Beginner"
            },
            {
              "k":"Javascript",
              "s":"Beginner"
            },
            {
              "k":"HTML",
              "s":"Beginner"
            },
            {
              "k":"CSS",
              "s":"Beginner"
            },
            {
              "k":"Microsoft Power Point",
              "s":"Beginner"
            },
            {
              "k":"Microsoft Excell",
              "s":"Beginner"
            },
            {
              "k":"Microsoft Word",
              "s":"Beginner"
            },
          ],
        },
        article:[],
        read:null
      
    };
  },
  methods: {
    getArticle() {
        axios
            .get(
                src = "./contents/article.json"
            )
            .then((res) => {
                console.log(res.data);
                this.article = res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    showArticle() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const read = urlParams.get('read');
        var converter = new showdown.Converter();
        axios
            .get(
                src="./contents/"+read
            )
            .then((res) => {
                var html = converter.makeHtml(res.data);
                this.read = html;
            })
            .catch((error) => {
                console.log(error);
            });
    }
},
beforeMount() { //fungsi yang dipanggil oleh vue sebelum mount terjadi
    this.getArticle(),
    this.showArticle()

},
}).mount("#app");

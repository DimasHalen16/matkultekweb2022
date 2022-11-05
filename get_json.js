Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {
          title: "M. Rezky Septiodimas Halen",
          description:
            "Mahasiswa Universitas Ahmad Dahlan Yogyakarta",
          social: {
            ig: {
              url: "https://www.instagram.com/diaznovzap_/?hl=id",
              title: "rezkyseptiodimashalen",
            },
            fb: {
              url: "#",
              title: "rezkyseptiodimashalen",
            },
          },
          imageProfile:
            "image/profil2.png",
          },
  
          table:{
            tjudul:"TABEL KETERAMPILAN",
            th:["No.","Skill","Keterampilan"],
            tr:[
              {
                "k":"Python",
                "s":"Intermediatte"
              },
              {
                "k":"C++",
                "s":"Intermediatte"
              },
              {
                "k":"Javascript",
                "s":"Intermediatte"
              },
              {
                "k":"HTML",
                "s":"Expert"
              },
              {
                "k":"CSS",
                "s":"Expert"
              },
              {
                "k":"Microsoft Power Point",
                "s":"Expert"
              },
              {
                "k":"Microsoft Excell",
                "s":"Intermediatte"
              },
              {
                "k":"Microsoft Word",
                "s":"Expert"
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
  
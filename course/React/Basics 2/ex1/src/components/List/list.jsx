import React from "react";

class List extends React.Component {
  state = {
    data: [
      {
        id: 1,
        first_name: "Inga",
        email: "iwainscoat0@ezinearticles.com",
        country: "Sweden"
      },
      {
        id: 2,
        first_name: "Ugo",
        email: "utattershall1@ow.ly",
        country: "Colombia"
      },
      {
        id: 3,
        first_name: "Ogdon",
        email: "ocovill2@woothemes.com",
        country: "Indonesia"
      },
      {
        id: 4,
        first_name: "Xenia",
        email: "xkelley3@goodreads.com",
        country: "France"
      },
      {
        id: 5,
        first_name: "Kizzee",
        email: "knesey4@phpbb.com",
        country: "Philippines"
      },
      {
        id: 6,
        first_name: "Rozella",
        email: "rarlet5@si.edu",
        country: "Russia"
      },
      {
        id: 7,
        first_name: "Lucille",
        email: "lputland6@techcrunch.com",
        country: "Netherlands"
      },
      {
        id: 8,
        first_name: "Tom",
        email: "tughetti7@github.io",
        country: "France"
      },
      {
        id: 9,
        first_name: "Dorisa",
        email: "drenak8@usgs.gov",
        country: "China"
      },
      {
        id: 10,
        first_name: "Mathew",
        email: "mcowhig9@google.co.jp",
        country: "France"
      },
      {
        id: 11,
        first_name: "Jarred",
        email: "jkingswooda@sourceforge.net",
        country: "Mexico"
      },
      {
        id: 12,
        first_name: "Brodie",
        email: "bblazejb@360.cn",
        country: "Thailand"
      },
      {
        id: 13,
        first_name: "Bella",
        email: "bbaudreyc@elpais.com",
        country: "Vietnam"
      },
      {
        id: 14,
        first_name: "Obie",
        email: "osetfordd@posterous.com",
        country: "Czech Republic"
      },
      {
        id: 15,
        first_name: "Keith",
        email: "krainone@comsenz.com",
        country: "Indonesia"
      },
      {
        id: 16,
        first_name: "Lizzie",
        email: "lboltwoodf@so-net.ne.jp",
        country: "Indonesia"
      },
      {
        id: 17,
        first_name: "Ignace",
        email: "iflarityg@salon.com",
        country: "China"
      },
      {
        id: 18,
        first_name: "Florida",
        email: "fstuffinsh@fotki.com",
        country: "Sweden"
      },
      {
        id: 19,
        first_name: "Addy",
        email: "abalmi@howstuffworks.com",
        country: "China"
      },
      {
        id: 20,
        first_name: "Mara",
        email: "mdurramj@ehow.com",
        country: "Greece"
      },
      {
        id: 21,
        first_name: "Nico",
        email: "nmallingk@artisteer.com",
        country: "France"
      },
      {
        id: 22,
        first_name: "Nolie",
        email: "nworpolel@tinyurl.com",
        country: "Yemen"
      },
      {
        id: 23,
        first_name: "Clotilda",
        email: "cobeneym@scientificamerican.com",
        country: "Poland"
      },
      {
        id: 24,
        first_name: "Honoria",
        email: "hswinnn@booking.com",
        country: "Latvia"
      },
      {
        id: 25,
        first_name: "Tanny",
        email: "tgrimoldbyo@fastcompany.com",
        country: "Argentina"
      },
      {
        id: 26,
        first_name: "Frank",
        email: "fvecardp@sourceforge.net",
        country: "China"
      },
      {
        id: 27,
        first_name: "Constantine",
        email: "cspracklingq@ca.gov",
        country: "Indonesia"
      },
      {
        id: 28,
        first_name: "Tomi",
        email: "tpenhaligonr@eventbrite.com",
        country: "Iran"
      },
      {
        id: 29,
        first_name: "Shina",
        email: "sfilippazzos@tuttocitta.it",
        country: "China"
      },
      {
        id: 30,
        first_name: "Seline",
        email: "ssargeauntt@weebly.com",
        country: "Indonesia"
      },
      {
        id: 31,
        first_name: "Case",
        email: "cstannionu@salon.com",
        country: "China"
      },
      {
        id: 32,
        first_name: "Aimee",
        email: "adudleyv@quantcast.com",
        country: "Indonesia"
      },
      {
        id: 33,
        first_name: "Winthrop",
        email: "wglackenw@chronoengine.com",
        country: "France"
      },
      {
        id: 34,
        first_name: "Neda",
        email: "nkarlolakx@java.com",
        country: "Philippines"
      },
      {
        id: 35,
        first_name: "Rachael",
        email: "rfrilly@hatena.ne.jp",
        country: "Yemen"
      },
      {
        id: 36,
        first_name: "Donielle",
        email: "dbarthelz@elpais.com",
        country: "Philippines"
      },
      {
        id: 37,
        first_name: "Roxanna",
        email: "rtupling10@tinypic.com",
        country: "Dominican Republic"
      },
      {
        id: 38,
        first_name: "Chester",
        email: "cbernocchi11@fc2.com",
        country: "Finland"
      },
      {
        id: 39,
        first_name: "Marion",
        email: "mtraylen12@google.ca",
        country: "Indonesia"
      },
      {
        id: 40,
        first_name: "Koo",
        email: "kleleu13@nps.gov",
        country: "Bangladesh"
      },
      {
        id: 41,
        first_name: "Gloriane",
        email: "grofe14@qq.com",
        country: "Belarus"
      },
      {
        id: 42,
        first_name: "Janella",
        email: "jhachette15@cargocollective.com",
        country: "Venezuela"
      },
      {
        id: 43,
        first_name: "Auroora",
        email: "alattimore16@google.cn",
        country: "Thailand"
      },
      {
        id: 44,
        first_name: "Bertina",
        email: "bdigwood17@usa.gov",
        country: "Indonesia"
      },
      {
        id: 45,
        first_name: "Edita",
        email: "echetwin18@ask.com",
        country: "China"
      },
      {
        id: 46,
        first_name: "Woodrow",
        email: "wperrins19@rambler.ru",
        country: "Russia"
      },
      {
        id: 47,
        first_name: "Tierney",
        email: "tjenkyn1a@histats.com",
        country: "Russia"
      },
      {
        id: 48,
        first_name: "Marlow",
        email: "mpond1b@army.mil",
        country: "Cape Verde"
      },
      {
        id: 49,
        first_name: "Rosella",
        email: "rkrabbe1c@wordpress.org",
        country: "China"
      },
      {
        id: 50,
        first_name: "Blondie",
        email: "bazemar1d@t.co",
        country: "China"
      },
      {
        id: 51,
        first_name: "Stoddard",
        email: "szammett1e@imageshack.us",
        country: "Germany"
      },
      {
        id: 52,
        first_name: "Tremain",
        email: "tdomeney1f@deviantart.com",
        country: "Russia"
      },
      {
        id: 53,
        first_name: "Quintin",
        email: "qcrim1g@samsung.com",
        country: "China"
      },
      {
        id: 54,
        first_name: "Zorana",
        email: "zdell1h@dedecms.com",
        country: "Ukraine"
      },
      {
        id: 55,
        first_name: "Farleigh",
        email: "fchiechio1i@pagesperso-orange.fr",
        country: "Brazil"
      },
      {
        id: 56,
        first_name: "Warden",
        email: "wfishbourn1j@bloglines.com",
        country: "South Africa"
      },
      {
        id: 57,
        first_name: "Rhodie",
        email: "rtremberth1k@edublogs.org",
        country: "Brazil"
      },
      {
        id: 58,
        first_name: "Egor",
        email: "enormadell1l@mapquest.com",
        country: "Peru"
      },
      {
        id: 59,
        first_name: "Bronny",
        email: "bkalf1m@chronoengine.com",
        country: "Russia"
      },
      {
        id: 60,
        first_name: "Natty",
        email: "nlyptrit1n@jimdo.com",
        country: "Ukraine"
      },
      {
        id: 61,
        first_name: "Mehetabel",
        email: "mheephy1o@tinypic.com",
        country: "Japan"
      },
      {
        id: 62,
        first_name: "Moishe",
        email: "mhubach1p@merriam-webster.com",
        country: "China"
      },
      {
        id: 63,
        first_name: "Sella",
        email: "sbleasdille1q@usa.gov",
        country: "Portugal"
      },
      {
        id: 64,
        first_name: "Carline",
        email: "cmeus1r@imageshack.us",
        country: "Brazil"
      },
      {
        id: 65,
        first_name: "Faustina",
        email: "fgowland1s@va.gov",
        country: "China"
      },
      {
        id: 66,
        first_name: "Matthiew",
        email: "mstockau1t@skyrock.com",
        country: "Poland"
      },
      {
        id: 67,
        first_name: "Gaile",
        email: "goleszczak1u@stanford.edu",
        country: "Argentina"
      },
      {
        id: 68,
        first_name: "Sandye",
        email: "strounce1v@list-manage.com",
        country: "Poland"
      },
      {
        id: 69,
        first_name: "Amitie",
        email: "amainz1w@boston.com",
        country: "Albania"
      },
      {
        id: 70,
        first_name: "Caron",
        email: "cfihelly1x@admin.ch",
        country: "China"
      },
      {
        id: 71,
        first_name: "Max",
        email: "mavrasin1y@mac.com",
        country: "Nicaragua"
      },
      {
        id: 72,
        first_name: "Theodor",
        email: "tthorndycraft1z@noaa.gov",
        country: "Malaysia"
      },
      {
        id: 73,
        first_name: "Xymenes",
        email: "xmacgille20@google.nl",
        country: "Portugal"
      },
      {
        id: 74,
        first_name: "Garrett",
        email: "gwhiteson21@odnoklassniki.ru",
        country: "China"
      },
      {
        id: 75,
        first_name: "Lyle",
        email: "lbirth22@woothemes.com",
        country: "Poland"
      },
      {
        id: 76,
        first_name: "Launce",
        email: "lbedenham23@twitter.com",
        country: "Russia"
      },
      {
        id: 77,
        first_name: "Lyn",
        email: "ltant24@patch.com",
        country: "Albania"
      },
      {
        id: 78,
        first_name: "Debora",
        email: "darnowitz25@fda.gov",
        country: "Finland"
      },
      {
        id: 79,
        first_name: "Aimee",
        email: "abuye26@privacy.gov.au",
        country: "Russia"
      },
      {
        id: 80,
        first_name: "Sharla",
        email: "sough27@cisco.com",
        country: "Russia"
      },
      {
        id: 81,
        first_name: "Colas",
        email: "cflew28@geocities.com",
        country: "United States"
      },
      {
        id: 82,
        first_name: "Nico",
        email: "nvoisey29@w3.org",
        country: "France"
      },
      {
        id: 83,
        first_name: "Kalila",
        email: "kbagley2a@tuttocitta.it",
        country: "Dominican Republic"
      },
      {
        id: 84,
        first_name: "Flynn",
        email: "fgoundrill2b@yahoo.co.jp",
        country: "Czech Republic"
      },
      {
        id: 85,
        first_name: "Gabby",
        email: "gpizzie2c@soup.io",
        country: "Indonesia"
      },
      {
        id: 86,
        first_name: "Alethea",
        email: "alydall2d@prlog.org",
        country: "China"
      },
      {
        id: 87,
        first_name: "Godfree",
        email: "gwilliamson2e@indiatimes.com",
        country: "Peru"
      },
      {
        id: 88,
        first_name: "Oswald",
        email: "ocloake2f@unicef.org",
        country: "Argentina"
      },
      {
        id: 89,
        first_name: "Eolanda",
        email: "esilverson2g@chron.com",
        country: "Portugal"
      },
      {
        id: 90,
        first_name: "Lucille",
        email: "lellin2h@opensource.org",
        country: "Ghana"
      },
      {
        id: 91,
        first_name: "Jeri",
        email: "jhundall2i@de.vu",
        country: "Georgia"
      },
      {
        id: 92,
        first_name: "Yovonnda",
        email: "ytunaclift2j@spiegel.de",
        country: "Brazil"
      },
      {
        id: 93,
        first_name: "Brittan",
        email: "bhardinge2k@reuters.com",
        country: "Russia"
      },
      {
        id: 94,
        first_name: "Kippie",
        email: "kdarke2l@g.co",
        country: "Kenya"
      },
      {
        id: 95,
        first_name: "Selene",
        email: "swimpress2m@yandex.ru",
        country: "China"
      },
      {
        id: 96,
        first_name: "Alix",
        email: "akoppens2n@acquirethisname.com",
        country: "Czech Republic"
      },
      {
        id: 97,
        first_name: "Aveline",
        email: "aconnealy2o@nyu.edu",
        country: "Thailand"
      },
      {
        id: 98,
        first_name: "Juliane",
        email: "jbattman2p@stumbleupon.com",
        country: "Indonesia"
      },
      {
        id: 99,
        first_name: "Estevan",
        email: "eferronet2q@merriam-webster.com",
        country: "Japan"
      },
      {
        id: 100,
        first_name: "Bianka",
        email: "bwinton2r@hexun.com",
        country: "Poland"
      }
    ]
  };
  render() {
    const { data } = this.state.data;
    return (
      <div>
        {this.state.data.map(item => {
          console.log(item);

          return <div key={item.id}>{item.first_name}</div>;
        })}
      </div>
    );
  }
}

export default List;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Content from "./content/index";
import Images from "./img/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import ProductsDetail from "../ProductsDetail";

class SectionPublic extends React.Component {
  state = {
    img: <Images />,
    content: <Content />,
    data: [
      {
        id: 0,
        title: "میلگرد بستر ",
        icon: "https://fs-avijeh.com/wp-content/uploads/2021/12/milgerdBastarIcon.png",
        link:
          "https://fs-avijeh.com/portfolio/%d9%85%db%8c%d9%84%da%af%d8%b1%d8%af-%d8%a8%d8%b3%d8%aa%d8%b1/",
        discription:
          "مطابـق  آیین نامه های بین المللی و آیین نامه های داخلی نظیر پیوسـت ششـم اسـتاندارد 2800 و مبحـث هشـتم مقـررات ملـی، میلگردبسـتر استاندارد ،از یـک جفـت مفتـول طولـی  تغییـر شـکل یافتـه (آجدار)  با قطر حداقل 3 میلیمتــر که بصورت سرد نورد می باشد،و یــک مفتــول عرضــی بــه صـورت خرپایـی  (مناسب مناطق زلزله خیز) که بـه آن هـا جـوش شـده، تشـکیل می شـود و بـه منظـورپیشـگیری از خوردگـی، بـاضخامـت مناسـب که مورد تایید مرکز تحقیقات راه ، مسکن و شهرسازی نیز می باشد بصـورت سرد گالوانیـزه می گردد.",
        image:
          "https://fs-avijeh.com/wp-content/uploads/2020/11/truss-wire.png",
      },
      {
        id: 1,
        title: "گیره",
        link: "https://fs-avijeh.com/portfolio/%da%af%db%8c%d8%b1%d9%87",
        icon: "https://fs-avijeh.com/wp-content/uploads/2021/12/gire-1.png",
        discription:
          "گیره قطعـه ای اسـت کـه بـه سـتون متصـل شـده از ورق فولادی با ضخامت 3 میلیمتر تهیه میگردد برای بالا بردن استحکام ، بر روی این قطعه فرورفتگی هایی ایجاد  می شود.",
        image: "https://fs-avijeh.com/wp-content/uploads/2020/11/gire.png",
      },
      {
        id: 2,
        title: "قلاب",
        link: "https://fs-avijeh.com/portfolio/%d9%82%d9%84%d8%a7%d8%a8/",
        icon: "https://fs-avijeh.com/wp-content/uploads/2021/12/qolab.png",
        discription:
          "ایــن قطعــه بــه منظــور درگیــری دیــوار  و ســتون طراحــی شــده وبــا توجــه بــه شــکل آن، بــه آســانی مــی توانــد روی میلگــرد بســتر قرار گرفته و همپوشــانی و درگیــری لازم بــا مــلات را میسر سازد .این قطعه از مفتول فولادی با سختی نسبتا بالا به قطر 4 میلیمتر ساخته شده است. نیــز جهــت جلوگیــری از خوردگــی گالوانیــزه شــده اســت",
        image: "https://fs-avijeh.com/wp-content/uploads/2020/11/Qolab.jpg",
      },
      {
        id: 3,
        link:
          "https://fs-avijeh.com/portfolio/%d9%82%d8%b7%d8%b9%d9%87-%d9%86%d8%a8%d8%b4%db%8c-%d9%85%d9%86%d9%82%d8%b7%d8%b9-%d9%88%d8%a7%d9%84-%d9%be%d8%b3%d8%aa/",
        title: "قطعه نبشی منقطع",
        icon: "https://fs-avijeh.com/wp-content/uploads/2023/06/navdoniMonghateh.png",
        discription:
          "قطعــه نبشی منقطع بــه صــورت مهندســی طراحــی و توســط نــرم افــزارهــای تخصصــی تحلیــل شــده و مکانیــزم آن بــه گونــه ای مــیباشــد کــه نیروهــای وارد شــده هنــگام زلزلــه را بــه طــور کامــل تحمـل و سـپس بـه حالـت اولیـه بـاز مـی گـردد. ایـن در حالتـی اســت کــه حتــی ناودانــی هایــی بــا ضخامــت 3 میلیمتــر نیــزچنیــن قابلیتــی را ندارنــد.  قطعه نبشی منقطع بصورت گالوانیزه تولید می شود.",
        image:
          "https://fs-avijeh.com/wp-content/uploads/2023/06/navdoniMonghateh.png",
      },
      
      {
        id: 4,
        link:
          "https://fs-avijeh.com/portfolio/%d9%82%d8%b7%d8%b9%d9%87-%d9%86%da%af%d9%87%d8%af%d8%a7%d8%b1%d9%86%d8%af%d9%87-%d9%86%d9%85%d8%a7-%d9%86%da%af%d9%87%d8%af%d8%a7%d8%b1%d9%86%d8%af%d9%87-%d8%a2%d8%ac%d8%b1%d9%86%d9%85%d8%a7/",
        title: "قطعات  نگهدارنده نما",
        icon: "https://fs-avijeh.com/wp-content/uploads/2023/06/negahdarandeh-nama.png",
        discription:
          "این قطعات مطابق با ضابطه 714 و پیوست 6 استاندارد 2800 طراحی و ساخته شده است و برای نگهداری و اتصال  نمای ساختمان به سایر اجزای  ساختمان طراحی و تولید شده است.قطعه نگهدارنده نما از مفتول با سختی نسبتا بالا ساخته شده و جهت جلوگیری از خوردگی بصورت سرد گالوانیزه می گردد.",
        image:
          "https://fs-avijeh.com/wp-content/uploads/2023/06/negahdarandeh-nama.png",
      },
      {
        id: 5,
        link:
          "https://fs-avijeh.com/%d9%85%d8%ad%d8%b5%d9%88%d9%84%d8%a7%d8%aa/",
        title: "بست رادیکالی",
        icon: "https://fs-avijeh.com/wp-content/uploads/2023/06/bast-radikali.png",
        discription:
          "این قطعه جهت نگهداری دیوارهای ساخته شده با انواع بلوک  AAC در قاب استفاده میگردد.حالت ارتجاعی بست رادیکالی سبب کاهش انتقال نیرو از دیوار به سازه می شود.",
        image: "https://fs-avijeh.com/wp-content/uploads/2023/06/bast-radikali.png",
      },
      {
        id: 6,
        link:
          "https://fs-avijeh.com/portfolio/ناودانی-منقطع-فراسازان-آویژه/",
        title: "ناودانی منقطع",
        icon: "https://fs-avijeh.com/wp-content/uploads/2023/06/navdoniMonghateh.png",
        discription:
          "قطعه ناودانی از ورق 2 میلیمتر گالوانیزه ساخته شده است و طراحی خاص این قطعه و ریب و نکها که روی قطعه ایجاد شده است مقاومت این قطعه را چند برابر نموده است.",
        image: "https://fs-avijeh.com/wp-content/uploads/2023/06/navdoniMonghateh.png",
      },
      {
        id: 7,
        link:
          "https://fs-avijeh.com/portfolio/قطعه-هشتگیر-فراسازان-آویژه/",
        title: "قطعه هشتگیر",
        icon: "https://fs-avijeh.com/wp-content/uploads/2023/06/hashtgir.png",
        discription:
        "قطعه هشتگیر از ورق با ضخامت 2 میلیمتر و با رو کش گالوانیزه ساخته شده است. برای بلوک با عرض 10 ، 15 و20سانتی متر طراحی شده و در محل تقاطع دیوارها یا همون هشتگیر استفاده میشود.",
        image: "https://fs-avijeh.com/wp-content/uploads/2023/06/hashtgir.png",
      },
      {
        id: 8,
        title: "میلگرد بستر تسمه ای",
        link:
          "https://fs-avijeh.com/portfolio/%d9%85%db%8c%d9%84%da%af%d8%b1%d8%af-%d8%a8%d8%b3%d8%aa%d8%b1-%d8%aa%d8%b3%d9%85%d9%87-%d8%a7%db%8c/",
        icon: "https://fs-avijeh.com/wp-content/uploads/2021/12/MilgerdBastarTasmeei-1.png",
        discription:
          "این قطعه به صورت استاندارد با عرض 7 سانتی متر و طول 3 متر تولید می شود و ضخامت آن نیز 2.5 میلیمتر می باشدکه  بــا مصالــح مــدرن بتــن سـبک هوادار (بلوک های AAC،CLC و...)  قابـل اسـتفاده می باشـد ،بــا ایــن تفــاوت کــه در میلگــرد بســتر مفتولــی ضخامت 4 میلیمتر در حالی که ضخامت  در این محصول۲.5 میلیمتر می باشد.تمامــی مراحــل ســاخت محصــول میلگرد بستر تسمه ای مطابــق با اســتاندارد های داخلی و بین المللی اســت.",
        image:
          "https://fs-avijeh.com/wp-content/uploads/2021/12/MilgerdBastarTasmeei-1.png",
      },
      
      {
        id: 9,
        link:
          "https://fs-avijeh.com/portfolio/بست-تخت-هبلکس-فراسازان-آویژه/",
        title: "بست تخت",
        icon: "https://fs-avijeh.com/wp-content/uploads/2023/06/bastTakht.png",
        discription:"قطعه بست تخت صرفا برای بلوک های AAC یا هبلکس و دقیقا مطابق آیین نامه ضابطه 819 طراحی و تولید شده است",
        image: "https://fs-avijeh.com/wp-content/uploads/2023/06/bastTakht.png",
      },
      
      {
        id: 10,
        link:
          "https://fs-avijeh.com/portfolio/قطعه-نما-مثلثی-فراسازان-آویژه/",
        title: "قطعه نما مثلثی",
        icon: "https://fs-avijeh.com/wp-content/uploads/2023/06/namaMosalasi.png",
        discription:"قطعه نما مثلثی از مفتول 4 میلیمتر با روکش گالوانیزه ساخته شده و فقط مخصوص آجر می باشد این قطعه یا به گیره و یا به قطعه نما هبلکس متصل می شود و نما آجری روی آن اجرا می گردد.",
        image: "https://fs-avijeh.com/wp-content/uploads/2023/06/namaMosalasi.png",
      },
    ],
    productDetail: "",
  };

  componentDidMount() {
    this.milgerdebastaryek(0);
  }

  milgerdebastaryek = (id) => {
    const { data } = this.state;
    const discript = data.find((item) => item.id === id);
    this.setState({
      productDetail: discript,
    });
  };
  render() {
    const { data, productDetail } = this.state;
    return (
      <div className="row content-box">
        <div className="col-lg-6 col-md-6">
          <div className="home-baner">
            <div className="home-baner__product">
              <ProductsDetail data={productDetail} />
            </div>
            <div className="home-baner__bg"></div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="row">
            <div className="col-12">
              <h1 className="box-product--title">فراسازان آویژه</h1>
            </div>
            <div className="col-12">
              <div className="row">
                {data.map((item, index) => (
                  <div className="col-3 pl-0 pr-1" key={index}>
                    <div
                      className="box-product"
                      onClick={() => this.milgerdebastaryek(item.id)}
                    >
                      <div className="box-product__product_icon">
                        <img className="img-product" src={item.icon} alt="" />
                      </div>
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionPublic;

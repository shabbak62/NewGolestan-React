import { basePath } from "@/lib/basePath";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import Up from "@/components/up/Up";
import Intro from "@/components/Introduction/Intro";
import About from "@/components/About/About";
import ProductCard from "@/components/ProductSection/productcard";
import ParallaxSection from "@/components/ParallaxSection/parallaxSection";
import Magazine from "@/components/Magazine/Magazine";
import Response from "@/components/SocialResponsibility/Response";
import Footer from "@/components/Footer/Footer";
const products = [
  {
    image: `${basePath}/Image/52.png`,
    title: "برنج گلستان",
    subtitle: "معرفی محصول",
    Tdescription: "رکن اول غذای ایرانی",
    description: (
      <>
        {" "}
        مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و
        هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل
        كیفیت در آزمایشگاه‌های تخصصی{" "}
        <span className="text-red-500 text-[16px]"> گلستان</span> وارد چرخه
        بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر
        برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی
        بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
      </>
    ),
    button1: "محصولات برنج",
    button2: "آشپزخانه گلستان",
  },
  {
    image: `${basePath}/Image/22.png`,
    title: "چای گلستان",
    subtitle: "معرفی محصول",
    Tdescription: "سابقه ای به قدمت یک عمر",

    description: (
      <>
        {" "}
        چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای
        برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی
        دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب
        آرامش را به همراه دارد. برای مردمان ایران زمین نام{" "}
        <span className="text-red-500 text-[16px]"> گلستان</span> با چای پیوند
        خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین
        دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش
        یك عمر به نام <span className="text-red-500 text-[16px]"> گلستان</span>{" "}
        اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.{" "}
      </>
    ),

    button1: "محصولات چای",
  },
  {
    image: `${basePath}/Image/pest.png`,
    title: "پسته گلستان",
    subtitle: "معرفی محصول",
    Tdescription: " آجيل‌های خوش خنده",
    description: (
      <>
        خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد
        معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب. پسته
        گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از
        بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه
        و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده
        و‌<span className="text-red-500 text-[16px]"> پسته گلستان</span> را با
        طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.
      </>
    ),

    button2: "ناتس گلستان",
  },
];

export default function Home() {
  return (
    <main
      className="md:w-[84%] w-full mx-auto flex flex-col relative shadow-[0_0_10px_rgb(230,229,229)] bg-fixed bg-contain bg-white"
      style={{ backgroundImage: `url(${basePath}/Image/recipe-baner-1.png)` }}
    >
      <Header />
      <Hero />
      <Up />
      
      <About />
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            Tdescription={product.Tdescription}
            description={product.description}
            button1={product.button1}
            button2={product.button2}
          />
        ))}
      </div>
      <ParallaxSection />
      <Magazine />
      <Response />
      <Footer />
    </main>
  );
}

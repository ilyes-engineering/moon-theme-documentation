import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const features = [
  {
    number: '01',
    title: 'تجربة عربية أولًا',
    text: 'واجهة واضحة تدعم اتجاه RTL وتمنح كل قسم مساحة كافية ليحكي قصة متجرك.',
  },
  {
    number: '02',
    title: 'أقسام جاهزة للنمو',
    text: 'من المنتجات والتبويبات إلى البانرات والروابط، ابنِ الصفحة التي يحتاجها متجرك.',
  },
  {
    number: '03',
    title: 'تفاصيل تصنع الفرق',
    text: 'حركة هادئة، مسافات محسوبة، وصور في مكانها الصحيح لتبقى التجربة أنيقة وسريعة.',
  },
];

function SiteMark() {
  return (
    <Link className={styles.siteMark} to="/">
      <img src="https://cdn.files.salla.network/theme/812730009/e6af03e7-c390-46ad-b7c4-a72f8215941b.gif " alt="" />   
<span className={styles.siteMarkText}></span>
    </Link>
  );
}

function HomepageHeader({siteConfig}) {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGlow} />
      <nav className={styles.landingNav} aria-label="التنقل الرئيسي">
        <SiteMark />
        <div className={styles.navLinks}>
          <Link to="/docs/intro">استكشف الدليل</Link>
          <Link to="/blog">من المدونة</Link>
        </div>
        <Link className={styles.navCta} to="/docs/intro">ابدأ من هنا <span>↗</span></Link>
      </nav>

      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> قالب تجارة إلكترونية عربي</p>
          <Heading as="h1">اجعل متجرك<br /><em>يُرى كما يستحق.</em></Heading>
          <p className={styles.heroLead}>{siteConfig.tagline} صُمّم ليمنح المنتجات حضورًا، والصفحات إيقاعًا، والتجربة شخصية لا تُنسى.</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} to="/docs/intro">اكتشف Moon <span>←</span></Link>
            <Link className={styles.textButton} to="/docs/tutorial-basics/fixed-products">شاهد المكوّنات <span>↗</span></Link>
          </div>
          <div className={styles.heroNote}><span className={styles.noteDot} /> موثّق بالعربية، ومبني لمتاجر سلة</div>
        </div>

        <div className={styles.heroVisual} aria-label="معاينة ثيم Moon">
          <div className={clsx(styles.orbit, styles.orbitOne)} />
          <div className={clsx(styles.orbit, styles.orbitTwo)} />
          <div className={styles.imageFrame}>
            <img
              src="https://binarymoon.tech/wp-content/uploads/moon-theme/assets/phoneview.png"
              alt="معاينة ثيم Moon"
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '1rem',
                boxSizing: 'border-box',
                backgroundColor: '#08060d1a',
              }}
            />
            <div className={styles.imageShade} />
            <div className={styles.visualCaption}><span>MOON / 01</span><strong>هدوء بصري<br />وحضور واضح</strong></div>
          </div>
          <div className={styles.floatingLabel}><span>صُمّم من أجل النجاح</span></div>
          <div className={styles.starMark}>✦</div>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  return (
    <section className={styles.featureSection} style={{backgroundColor: '#2d273d1a'}}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}><span /> لماذا Moon؟</p>
          <Heading as="h2">مساحة أكبر<br /><em>لما يهم.</em></Heading>
          <p>ليس القالب مجرد واجهة جميلة. Moon هو نظام بصري يساعدك على ترتيب المحتوى وإبراز ما يهم عميلك.</p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.number}>
              <span className={styles.featureNumber}>{feature.number}</span>
              <div className={styles.featureLine} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className={styles.featureArrow}>↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section className={styles.showcaseSection}>
      <div className={clsx('container', styles.showcaseGrid)}>
        <div className={styles.showcaseImage}>
            <img src="https://binarymoon.tech/wp-content/uploads/moon-theme/assets/rep.png" alt="واجهة متجر مستوحاة من ثيم Moon" />
            <span className={styles.showcaseTag}>MOON / COMPONENTS</span>
        </div>
        <div className={styles.showcaseCopy}>
          <p className={styles.eyebrow}><span /> من الفكرة إلى الصفحة</p>
          <Heading as="h2">ابنِ بهدوء.<br /><em>أطلق بثقة.</em></Heading>
          <p>دليل Moon يأخذك خطوة بخطوة من إعداد الأقسام الأساسية إلى التفاصيل التي تمنح متجرك طابعه الخاص.</p>
          <Link className={styles.outlineButton} to="/docs/intro">تصفح دليل الاستعمال <span>←</span></Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Moon، قالب تجارة إلكترونية عربي لمنصة سلة.">
      <HomepageHeader siteConfig={siteConfig} />
      <main>
        <FeatureSection />
        <ShowcaseSection />
        <section className={styles.finalCta}>
          <p className={styles.eyebrow}><span /> الفصل التالي</p>
          <Heading as="h2">صفحة أجمل<br /><em>تبدأ بخطوة.</em></Heading>
          <Link className={styles.primaryButton} to="/docs/intro">ابدأ التعلّم <span>←</span></Link>
        </section>
      </main>
    </Layout>
  );
}

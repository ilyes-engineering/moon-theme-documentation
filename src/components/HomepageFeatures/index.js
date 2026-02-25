import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'سهل الاستخدام',
    Svg: require('@site/static/img/ease_of_use.svg').default,
    description: (
      <>
       من السهل جدًا دمج هذا القالب في متجرك ويمكنك إعداد متجر يعمل بكامل طاقته في يوم واحد فقط
      </>
    ),
  },
  {
    title: 'أحدث صيحات الموضة',
    Svg: require('@site/static/img/fashion.svg').default,
    description: (
      <>
      يتبع قالب القمر في تصميمه أحدث أنماط الموضة والتخطيطات لجعل متجرك مميزًا
      </>
    ),
  },
  {
    title: 'الدعم المستمر',
    Svg: require('@site/static/img/cx_support.svg').default,
    description: (
      <>
       نحن نقدم الدعم باستمرار بعد الشراء ونقوم بتحديث القالب الخاص بك باستمرار لجعل تجربتك فريدة من نوعها
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

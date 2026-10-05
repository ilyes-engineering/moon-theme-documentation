import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './changelog.module.css';

const updates = [
  {
    date: '٥ أكتوبر ٢٠٢٦',
    dateTime: '2026-10-05',
    changes: [
      {
        type: 'تحسين',
        title: 'تحديث طريقة عرض آراء العملاء',
        description:
          'تغيير تصميم قسم آراء العملاء لعرض التقييمات في بطاقات تتحرك أفقياً.',
      },
      {
        type: 'إصلاح',
        title: 'تحسين ألوان أيقونات شريط التنقل السفلي',
        description:
          'إصلاح ألوان الأيقونات في شريط التنقل السفلي على الجوال لتظهر بوضوح أكبر.',
      },
    ],
  },
];

export default function Changelog() {
  return (
    <Layout
      title="سجل التغييرات"
      description="آخر التحديثات والتحسينات في قالب Moon">
      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>قالب Moon</span>
            <Heading as="h1">سجل التغييرات</Heading>
            <p>تابع آخر التحسينات والإصلاحات التي أُضيفت إلى القالب.</p>
          </header>

          <section className={styles.timeline} aria-label="التحديثات الأخيرة">
            {updates.map((update) => (
              <section className={styles.release} key={update.dateTime}>
                <div className={styles.dateMarker}>
                  <span className={styles.dot} aria-hidden="true" />
                  <time dateTime={update.dateTime}>{update.date}</time>
                </div>
                <div className={styles.changes}>
                  {update.changes.map((change) => (
                    <article className={styles.change} key={change.title}>
                      <div className={styles.changeHeader}>
                        <Heading as="h2">{change.title}</Heading>
                        <span
                          className={`${styles.badge} ${
                            change.type === 'إصلاح'
                              ? styles.fix
                              : styles.improvement
                          }`}>
                          {change.type}
                        </span>
                      </div>
                      <p>{change.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}

import { useState } from "react";
import Icon from "@/components/ui/icon";

const STUDIO_IMG = "https://cdn.poehali.dev/projects/784e500c-647e-4a7e-95e1-934647152c05/files/f3633e2f-856a-4048-9fb2-7ed9c24fd590.jpg";
const TRAINER_IMG = "https://cdn.poehali.dev/projects/784e500c-647e-4a7e-95e1-934647152c05/files/a074e209-e704-465e-9ddb-a1408a9ed1ec.jpg";
const GROUP_IMG = "https://cdn.poehali.dev/projects/784e500c-647e-4a7e-95e1-934647152c05/files/920f300a-862d-4b0d-a9d9-0fbaf42be013.jpg";
const LOGO = "https://cdn.poehali.dev/projects/784e500c-647e-4a7e-95e1-934647152c05/bucket/ce79b859-f951-4144-8aa4-44a3e420eee5.png";

const A = "var(--accent-color)";
const M = "Montserrat, sans-serif";

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark)", color: "var(--text-primary)" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ borderBottom: "1px solid rgba(254,12,246,0.12)", backdropFilter: "blur(20px)", backgroundColor: "rgba(10,10,10,0.9)" }}>
        <img src={LOGO} alt="LAB SPACE" className="h-8 w-auto" />
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Акция", href: "#акция" },
            { label: "Студия", href: "#студия" },
            { label: "Тренеры", href: "#тренеры" },
            { label: "Отзывы", href: "#отзывы" },
            { label: "Контакты", href: "#контакты" },
          ].map((item) => (
            <a key={item.label} href={item.href}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: "var(--text-muted)", fontFamily: M }}
              onMouseEnter={e => (e.currentTarget.style.color = A)}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#контакты" className="btn-gold px-5 py-2.5">Записаться</a>
      </header>

      {/* HERO / АКЦИЯ */}
      <section id="акция" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={STUDIO_IMG} alt="LAB SPACE студия" className="w-full h-full object-cover" style={{ filter: "brightness(0.2)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.98) 40%, rgba(10,10,10,0.55) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 py-32 w-full">
          <div className="max-w-2xl animate-fade-up" style={{ animationFillMode: "both" }}>
            <span className="section-label mb-6 block">Специальное предложение</span>

            <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5"
              style={{ backgroundColor: "rgba(254,12,246,0.08)", border: "1px solid rgba(254,12,246,0.3)", borderRadius: "2px" }}>
              <Icon name="Gift" size={14} style={{ color: A }} />
              <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: A, fontFamily: M }}>
                Акция действует до 30 апреля
              </span>
            </div>

            <h1 className="mb-6 leading-tight font-black uppercase" style={{ fontFamily: M, fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "#ffffff", textShadow: "0 0 40px rgba(255,255,255,0.15)" }}>
              3 месяца<br />
              <span style={{ color: A }}>в подарок</span>
            </h1>

            <p className="mb-4 text-base leading-relaxed font-light" style={{ color: "rgba(255,255,255,0.75)", fontFamily: M, maxWidth: "480px" }}>
              При покупке абонемента на 12 месяцев — получаете 3 месяца в подарок. Это 25% экономии на весь год.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-12" style={{ backgroundColor: "rgba(255,255,255,0.3)" }}></div>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: M }}>
                Пробная тренировка от <strong style={{ color: "#ffffff" }}>500 ₽</strong>
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#контакты" className="btn-gold px-8 py-4 inline-block">Записаться на пробное</a>
              <a href="#контакты" className="btn-outline-gold px-8 py-4 inline-block">Купить абонемент</a>
            </div>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block" style={{ width: "420px" }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl" style={{ background: "radial-gradient(circle at center, rgba(254,12,246,0.3) 0%, transparent 70%)", filter: "blur(40px)" }} />
              <img
                src="https://cdn.poehali.dev/projects/784e500c-647e-4a7e-95e1-934647152c05/files/4fee6c7a-dfe5-43e1-a5c0-118b62ac5003.jpg"
                alt="3 месяца в подарок"
                className="relative w-full rounded-2xl"
                style={{ boxShadow: "0 0 60px rgba(254,12,246,0.2)", border: "1px solid rgba(254,12,246,0.2)" }}
              />
              <div className="absolute -bottom-4 -right-4 flex flex-col items-center justify-center w-24 h-24 rounded-full"
                style={{ backgroundColor: A, boxShadow: "0 0 30px rgba(254,12,246,0.5)" }}>
                <span className="text-2xl font-black leading-none" style={{ fontFamily: M, color: "#fff" }}>+3</span>
                <span className="text-xs font-bold" style={{ fontFamily: M, color: "#fff" }}>мес.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", fontFamily: M }}>Листайте</span>
          <Icon name="ChevronDown" size={16} style={{ color: A }} />
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="py-28 px-8 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">

          {/* Заголовок + большая цифра */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <span className="section-label block mb-4" style={{ color: A }}>Почему LAB SPACE</span>
              <h2 className="font-black uppercase" style={{ fontFamily: M, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0a0a0a" }}>Преимущества<br />студии</h2>
            </div>
            <div className="flex items-end gap-6">
              <div className="text-center">
                <div className="font-black leading-none" style={{ fontFamily: M, fontSize: "4rem", color: "#0a0a0a" }}>12+</div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "#999", fontFamily: M }}>направлений</div>
              </div>
              <div className="text-center">
                <div className="font-black leading-none" style={{ fontFamily: M, fontSize: "4rem", color: "#0a0a0a" }}>5★</div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "#999", fontFamily: M }}>рейтинг</div>
              </div>
              <div className="text-center">
                <div className="font-black leading-none" style={{ fontFamily: M, fontSize: "4rem", color: "#0a0a0a" }}>3</div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "#999", fontFamily: M }}>тренера</div>
              </div>
            </div>
          </div>

          {/* Большая карточка + три маленьких */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {/* Большая карточка */}
            <div className="rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: "#0a0a0a", minHeight: "340px" }}>
              <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(254,12,246,0.3) 0%, transparent 70%)" }} />
              <div className="w-12 h-12 flex items-center justify-center mb-8" style={{ backgroundColor: "rgba(254,12,246,0.12)", borderRadius: "12px" }}>
                <Icon name="Dumbbell" size={22} style={{ color: A }} />
              </div>
              <div>
                <h3 className="font-black uppercase mb-3" style={{ fontFamily: M, fontSize: "1.5rem", color: "#ffffff" }}>12+ направлений</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: M, maxWidth: "320px" }}>Йога, стретчинг, TRX, пилатес, табата, МФР — найдёте то, что подходит именно вам</p>
              </div>
            </div>

            {/* Две карточки справа */}
            <div className="grid grid-cols-1 gap-5">
              <div className="rounded-3xl p-8 flex items-center gap-6 relative overflow-hidden" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl" style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                  <Icon name="Users" size={24} style={{ color: A }} />
                </div>
                <div>
                  <h3 className="font-bold uppercase mb-1" style={{ fontFamily: M, color: "#0a0a0a" }}>Малые группы</h3>
                  <p className="text-sm" style={{ color: "#666", fontFamily: M }}>До 12 человек — тренер уделяет внимание каждому</p>
                </div>
              </div>
              <div className="rounded-3xl p-8 flex items-center gap-6" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl" style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                  <Icon name="MapPin" size={24} style={{ color: A }} />
                </div>
                <div>
                  <h3 className="font-bold uppercase mb-1" style={{ fontFamily: M, color: "#0a0a0a" }}>5 минут от метро</h3>
                  <p className="text-sm" style={{ color: "#666", fontFamily: M }}>Занимайтесь без лишних трат времени на дорогу</p>
                </div>
              </div>
            </div>
          </div>

          {/* Три карточки снизу */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "Star", title: "Опытные тренеры", text: "Сертифицированные специалисты с опытом от 5 лет", accent: true },
              { icon: "Calendar", title: "Гибкое расписание", text: "Утром, днём и вечером — легко совместить с жизнью", accent: false },
              { icon: "Shield", title: "Безопасно с нуля", text: "Программы адаптированы под любой уровень подготовки", accent: false },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl p-8 relative overflow-hidden"
                style={{ backgroundColor: item.accent ? A : "#f5f5f5" }}>
                <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-2xl"
                  style={{ backgroundColor: item.accent ? "rgba(255,255,255,0.15)" : "#ffffff", boxShadow: item.accent ? "none" : "0 4px 20px rgba(0,0,0,0.08)" }}>
                  <Icon name={item.icon} fallback="Star" size={20} style={{ color: item.accent ? "#ffffff" : A }} />
                </div>
                <h3 className="font-bold uppercase mb-2" style={{ fontFamily: M, color: item.accent ? "#ffffff" : "#0a0a0a" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: item.accent ? "rgba(255,255,255,0.75)" : "#666", fontFamily: M }}>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ФОТО СТУДИИ И ТРЕНЕРОВ */}
      <section id="студия" className="py-28 px-8 overflow-hidden" style={{ backgroundColor: "var(--dark)" }}>
        <div className="max-w-6xl mx-auto">

          {/* Заголовок */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-label block mb-4">Атмосфера</span>
              <h2 className="font-black uppercase" style={{ fontFamily: M, fontSize: "clamp(2rem, 4vw, 3rem)" }}>Студия и тренеры</h2>
            </div>
            <p className="text-sm font-light max-w-xs" style={{ color: "var(--text-muted)", fontFamily: M }}>
              Камерное пространство, где каждая деталь создана для вашего прогресса
            </p>
          </div>

          {/* Коллаж фото */}
          <div className="grid grid-cols-12 grid-rows-2 gap-3 mb-20" style={{ height: "500px" }}>
            <div className="col-span-7 row-span-2 overflow-hidden rounded-3xl relative group">
              <img src={STUDIO_IMG} alt="Студия LAB SPACE" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#fff", fontFamily: M }}>Зал тренировок</span>
              </div>
            </div>
            <div className="col-span-5 row-span-1 overflow-hidden rounded-3xl relative group">
              <img src={TRAINER_IMG} alt="Тренер" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-5 row-span-1 overflow-hidden rounded-3xl relative group">
              <img src={GROUP_IMG} alt="Групповая тренировка" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full" style={{ backgroundColor: A }}>
                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: "#fff", fontFamily: M }}>Группа</span>
              </div>
            </div>
          </div>

          {/* Тренеры */}
          <div id="тренеры">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="font-black uppercase" style={{ fontFamily: M, fontSize: "1.5rem" }}>Наши тренеры</h3>
              <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", fontFamily: M }}>3 специалиста</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: "Анна Соколова", role: "Йога · Медитация", exp: "8 лет", tags: ["Хатха", "Виньяса", "Нидра"] },
                { name: "Мария Лебедева", role: "Стретчинг · TRX", exp: "6 лет", tags: ["Растяжка", "Функционал", "Табата"] },
                { name: "Елена Кузнецова", role: "Пилатес · МФР", exp: "5 лет", tags: ["Пилатес", "МФР", "Постура"] },
              ].map((t, i) => (
                <div key={i} className="group rounded-3xl overflow-hidden relative" style={{ backgroundColor: "var(--dark-2)", border: "1px solid var(--border)" }}>
                  <div className="overflow-hidden" style={{ height: "280px" }}>
                    <img src={TRAINER_IMG} alt={t.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", color: A, fontFamily: M, border: `1px solid ${A}` }}>
                      {t.exp} опыта
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold mb-1" style={{ fontFamily: M, fontSize: "1rem" }}>{t.name}</h4>
                    <p className="text-xs tracking-wider uppercase font-semibold mb-4" style={{ color: A, fontFamily: M }}>{t.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {t.tags.map((tag, j) => (
                        <span key={j} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "var(--dark-3)", color: "var(--text-muted)", fontFamily: M }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* АКЦИЯ-БАННЕР */}
      <section className="py-20 px-8" style={{ backgroundColor: A }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-widest uppercase mb-2 font-semibold opacity-70" style={{ fontFamily: M, color: "#000" }}>Ограниченное предложение</p>
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: M, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#000" }}>
              12 месяцев + 3 в подарок
            </h2>
            <p className="mt-3 text-sm font-light opacity-70" style={{ fontFamily: M, color: "#000" }}>Пробная тренировка — от 500 ₽</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="#контакты" className="px-8 py-4 text-xs font-bold tracking-widest uppercase inline-block transition-all hover:opacity-80"
              style={{ backgroundColor: "#000", color: A, fontFamily: M, borderRadius: "2px" }}>
              Записаться на пробное
            </a>
            <a href="#контакты" className="px-8 py-4 text-xs font-bold tracking-widest uppercase inline-block transition-all"
              style={{ border: "2px solid #000", color: "#000", fontFamily: M, borderRadius: "2px" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; }}>
              Купить абонемент
            </a>
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="отзывы" className="py-28 px-8" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-label block mb-4" style={{ color: A }}>Клиенты о нас</span>
              <h2 className="font-black uppercase" style={{ fontFamily: M, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0a0a0a" }}>Отзывы</h2>
            </div>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} style={{ color: A, fontSize: "22px" }}>★</span>
              ))}
              <span className="ml-2 font-black text-2xl" style={{ fontFamily: M, color: "#0a0a0a" }}>5.0</span>
              <span className="ml-1 text-sm" style={{ color: "#999", fontFamily: M }}>/ 5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Светлана К.", since: "Клиент с 2022", text: "Занимаюсь уже два года. Атмосфера потрясающая — камерная, тёплая, без суеты большого зала. Тренеры профессиональные и внимательные. Стретчинг изменил моё тело за 3 месяца.", highlight: true },
              { name: "Ирина М.", since: "Клиент с 2023", text: "Пришла по акции на пробное занятие — и осталась. Качество тренировок выше, чем в крупных фитнес-клубах, а цена при этом честная. Рекомендую всем подругам!", highlight: false },
              { name: "Ольга Д.", since: "Клиент с 2024", text: "Очень удобное расписание — успеваю до работы. Тренер по йоге Анна — просто находка, объясняет каждую позицию. Пространство красиво оформлено, хочется возвращаться снова.", highlight: false },
            ].map((r, i) => (
              <div key={i} className="rounded-3xl p-8 flex flex-col justify-between"
                style={{ backgroundColor: r.highlight ? "#0a0a0a" : "#f5f5f5", minHeight: "280px" }}>
                <div>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} style={{ color: A, fontSize: "13px" }}>★</span>
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed font-light mb-8"
                    style={{ color: r.highlight ? "rgba(255,255,255,0.8)" : "#444", fontFamily: M }}>
                    «{r.text}»
                  </blockquote>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: r.highlight ? "rgba(254,12,246,0.2)" : "#ffffff", color: A, fontFamily: M, boxShadow: r.highlight ? "none" : "0 2px 10px rgba(0,0,0,0.08)" }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ fontFamily: M, color: r.highlight ? "#ffffff" : "#0a0a0a" }}>{r.name}</p>
                    <p className="text-xs" style={{ color: r.highlight ? "rgba(255,255,255,0.4)" : "#999", fontFamily: M }}>{r.since}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ФОРМА */}
      <section id="контакты" className="py-28 px-8" style={{ backgroundColor: "var(--dark)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="section-label block mb-6">Свяжитесь с нами</span>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: M, fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                Начните<br />
                <span style={{ color: A }}>сегодня</span>
              </h2>
              <p className="text-sm leading-relaxed mb-10 font-light" style={{ color: "var(--text-muted)", fontFamily: M, maxWidth: "380px" }}>
                Оставьте заявку — мы перезвоним в течение 30 минут и ответим на все вопросы. Первая тренировка от 500 ₽.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { icon: "Phone", text: "+7 (495) 000-00-00" },
                  { icon: "MapPin", text: "Москва, ул. Примерная, д. 1" },
                  { icon: "Clock", text: "Пн–Вс 7:00 — 23:00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(254,12,246,0.08)", border: "1px solid rgba(254,12,246,0.25)", borderRadius: "2px" }}>
                      <Icon name={item.icon} fallback="MapPin" size={15} style={{ color: A }} />
                    </div>
                    <span className="text-sm font-light" style={{ fontFamily: M, color: "var(--text-muted)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10" style={{ backgroundColor: "var(--dark-2)", border: "1px solid var(--border)", borderRadius: "2px" }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(254,12,246,0.12)", border: `1px solid ${A}` }}>
                    <Icon name="Check" size={24} style={{ color: A }} />
                  </div>
                  <h3 className="text-2xl mb-3 font-bold uppercase" style={{ fontFamily: M }}>Заявка отправлена!</h3>
                  <p className="text-sm font-light" style={{ color: "var(--text-muted)", fontFamily: M }}>Мы перезвоним в течение 30 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { label: "Ваше имя", key: "name", type: "text", placeholder: "Как вас зовут?" },
                    { label: "Телефон", key: "phone", type: "tel", placeholder: "+7 (___) ___-__-__" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs tracking-widest uppercase mb-2 font-semibold" style={{ color: "var(--text-muted)", fontFamily: M }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3.5 text-sm outline-none transition-all"
                        style={{ backgroundColor: "var(--dark-3)", border: "1px solid var(--border)", color: "var(--text-primary)", fontFamily: M, borderRadius: "2px" }}
                        onFocus={e => (e.target.style.borderColor = A)}
                        onBlur={e => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2 font-semibold" style={{ color: "var(--text-muted)", fontFamily: M }}>Комментарий</label>
                    <textarea
                      value={form.comment}
                      onChange={e => setForm({ ...form, comment: e.target.value })}
                      placeholder="Вопрос или пожелание..."
                      rows={3}
                      className="w-full px-4 py-3.5 text-sm outline-none transition-all resize-none"
                      style={{ backgroundColor: "var(--dark-3)", border: "1px solid var(--border)", color: "var(--text-primary)", fontFamily: M, borderRadius: "2px" }}
                      onFocus={e => (e.target.style.borderColor = A)}
                      onBlur={e => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button type="submit" className="btn-gold flex-1 py-4">Записаться на пробное</button>
                    <button type="submit" className="btn-outline-gold flex-1 py-4">Купить абонемент</button>
                  </div>
                  <p className="text-xs text-center font-light" style={{ color: "var(--text-muted)", fontFamily: M }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-8" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--dark)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO} alt="LAB SPACE" className="h-7 w-auto" />
          <p className="text-xs font-light" style={{ color: "var(--text-muted)", fontFamily: M }}>© 2024 LAB SPACE. Все права защищены.</p>
          <div className="flex gap-6">
            {["ВКонтакте", "Instagram", "Telegram"].map((s) => (
              <a key={s} href="#" className="text-xs tracking-wider uppercase font-semibold transition-colors"
                style={{ color: "var(--text-muted)", fontFamily: M }}
                onMouseEnter={e => (e.currentTarget.style.color = A)}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
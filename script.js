// ---------- 50 СЦЕНАРИЕВ ----------
const scenarios = [
{ text: "Здравствуйте, служба безопасности банка. На вашей карте подозрительная операция. Назовите код из СМС для отмены.", answers: [{ text: "Код 4821", trustDelta: 25, isDangerous: true, explanation: "Никогда не сообщайте коды из СМС – мошенники получат доступ к вашему счёту." }, { text: "Скажите, какой код? Я продиктую.", trustDelta: 20, isDangerous: true, explanation: "Запрашивая код, злоумышленники пытаются подтвердить операцию от вашего имени." }, { text: "Перезвоню в банк по номеру с обратной стороны карты.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Код 0000, это же мой пин-код?", trustDelta: 30, isDangerous: true, explanation: "Пин-код нельзя сообщать никому, даже 'сотрудникам банка'." }] },
{ text: "Алло, это ИТ-отдел. У нас сбой, нужно срочно проверить ваши учётные данные. Назовите логин и пароль от рабочего ПК.", answers: [{ text: "Мой логин: ivanov, пароль: pass123", trustDelta: 28, isDangerous: true, explanation: "Логин и пароль – ключ ко всей рабочей информации. Не разглашайте." }, { text: "Я создам заявку в техподдержку через внутренний портал.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Подождите, сейчас скажу: admin/admin", trustDelta: 30, isDangerous: true, explanation: "Стандартные пароли – лёгкая добыча для взлома." }, { text: "А вы кто конкретно? Назовите вашу должность.", trustDelta: 15, isDangerous: true, explanation: "Мошенник может представиться кем угодно. Не вступайте в диалог, проверяйте через официальные каналы." }] },
{ text: "Добрый день, это бухгалтерия. Уточните реквизиты для перечисления зарплаты: расчётный счёт и БИК.", answers: [{ text: "40702810123456789012, БИК 044525225", trustDelta: 30, isDangerous: true, explanation: "Реквизиты счёта могут использоваться для хищения средств." }, { text: "Скиньте запрос на корпоративную почту, я отвечу.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "Вот номер карты 1234 5678 9012 3456, остальное сами найдёте.", trustDelta: 25, isDangerous: true, explanation: "Номер карты и CVV – конфиденциальные данные." }, { text: "Реквизиты? Сейчас, диктую: 40817810099910004321", trustDelta: 28, isDangerous: true, explanation: "Мошенники могут использовать эти данные для подделки платёжных поручений." }] },
{ text: "Звонок от начальника: «Срочно! Переведи 50 000 на карту подрядчика, номер скажу по телефону. Код подтверждения из СМС продиктуй».", answers: [{ text: "Хорошо, диктую код: 8910", trustDelta: 35, isDangerous: true, explanation: "Код подтверждения – это подпись для перевода. Никогда не передавайте его." }, { text: "Перезвоню вам на рабочий номер, чтобы подтвердить.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Какой номер карты? Скажите, я сейчас переведу.", trustDelta: 20, isDangerous: true, explanation: "Мошенники могут подменить номер." }, { text: "Сделаю, только скажите пин-код от вашей карты для верификации.", trustDelta: 25, isDangerous: true, explanation: "Пин-код запрашивают только мошенники." }] },
{ text: "Техподдержка: «Обнаружена попытка взлома вашего аккаунта. Назовите пароль, чтобы мы его заблокировали».", answers: [{ text: "Пароль: Qwerty123!", trustDelta: 30, isDangerous: true, explanation: "Пароль – это секрет. Настоящая техподдержка никогда не спрашивает пароль." }, { text: "Я сам сброшу пароль через форму восстановления.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "Мой пароль: 123456, это же просто", trustDelta: 25, isDangerous: true, explanation: "Слабые пароли легко взламываются." }, { text: "Логин: user, пароль: password", trustDelta: 28, isDangerous: true, explanation: "Стандартные учётные данные – риск." }] },
{ text: "Вам звонит 'сотрудник полиции': ваш счёт используется мошенниками, нужно срочно перевести деньги на 'безопасный счёт'.", answers: [{ text: "Хорошо, какой номер счёта?", trustDelta: 30, isDangerous: true, explanation: "Безопасных счетов не существует – это уловка." }, { text: "Я перезвоню в отделение полиции по официальному номеру.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Диктую CVV для верификации.", trustDelta: 28, isDangerous: true, explanation: "CVV код нельзя сообщать никому." }, { text: "Сколько нужно перевести? Сейчас сделаю.", trustDelta: 20, isDangerous: true, explanation: "Не переводите деньги незнакомцам." }] },
{ text: "СМС от 'банка': ваша карта заблокирована, перейдите по ссылке для разблокировки. Вы переходите по ссылке и видите сайт, похожий на банковский. Что делать?", answers: [{ text: "Ввожу логин и пароль, как обычно.", trustDelta: 25, isDangerous: true, explanation: "Это фишинг – данные украдут." }, { text: "Закрываю страницу и захожу в приложение банка напрямую.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Ввожу номер карты и CVV, чтобы разблокировать.", trustDelta: 30, isDangerous: true, explanation: "Настоящий банк не просит CVV для разблокировки." }, { text: "Перехожу по ссылке и звоню по номеру с сайта.", trustDelta: 20, isDangerous: true, explanation: "Номер тоже поддельный." }] },
{ text: "Звонок: «Вы выиграли iPhone 15! Назовите данные карты для оплаты доставки»", answers: [{ text: "Карта 1234 5678 9012 3456, срок 12/26, CVV 123", trustDelta: 35, isDangerous: true, explanation: "Не сообщайте данные карты незнакомцам." }, { text: "Отправьте официальное письмо на почту, я проверю.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "С какой компании розыгрыш? Дайте ссылку.", trustDelta: 15, isDangerous: true, explanation: "Мошенники могут прислать фишинговую ссылку." }, { text: "Отлично! Мой пин-код: 1234", trustDelta: 30, isDangerous: true, explanation: "Пин-код – абсолютный секрет." }] },
{ text: "Звонок от 'соцзащиты': вам положена компенсация, нужно оплатить налог через терминал. Назовите код из СМС для подтверждения.", answers: [{ text: "Код 4821, оплачиваю налог.", trustDelta: 28, isDangerous: true, explanation: "Госорганы не просят оплату по телефону." }, { text: "Перезвоню в соцзащиту по номеру 122.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Сколько нужно? Переведу по номеру карты.", trustDelta: 22, isDangerous: true, explanation: "Никогда не переводите деньги 'за выигрыш'." }, { text: "Диктую паспортные данные для верификации.", trustDelta: 18, isDangerous: true, explanation: "Паспортные данные тоже можно использовать в мошенничестве." }] },
{ text: "В мессенджере пишет 'начальник' с фото: срочно переведи 100 000 на номер +7... Я сейчас на совещании, потом подтвержу.", answers: [{ text: "Перевожу, начальник же просит.", trustDelta: 35, isDangerous: true, explanation: "Аккаунт могли взломать. Перезвоните лично." }, { text: "Перезвоню начальнику по рабочему телефону и уточню.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Хорошо, скиньте официальную доверенность.", trustDelta: 15, isDangerous: true, explanation: "Мошенник может подделать документ." }, { text: "Диктую код из СМС для подтверждения перевода.", trustDelta: 28, isDangerous: true, explanation: "Код – ключ к вашим деньгам." }] },
{ text: "Звонок: «Ваш полис ОМС заблокирован. Назовите СНИЛС и код из СМС для восстановления».", answers: [{ text: "СНИЛС 123-456-789, код 1111", trustDelta: 25, isDangerous: true, explanation: "Мошенники получат доступ к госуслугам." }, { text: "Позвоню в страховую по официальному номеру.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "А какой у вас номер телефона? Я перезвоню.", trustDelta: 10, isDangerous: true, explanation: "Лучше не вступать в диалог." }, { text: "Диктую паспорт и прописку.", trustDelta: 18, isDangerous: true, explanation: "Личные данные помогут мошенникам." }] },
{ text: "Предлагают работу с ежедневной оплатой. Для оформления нужно назвать данные карты, куда будут переводить зарплату.", answers: [{ text: "Карта 1234 5678 9012 3456, CVV 123", trustDelta: 30, isDangerous: true, explanation: "Для перевода денег достаточно номера карты, CVV не нужен." }, { text: "Попрошу прислать договор на почту и проверю компанию.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Диктую пин-код для верификации.", trustDelta: 28, isDangerous: true, explanation: "Пин-код никогда не нужен для зачисления." }, { text: "Назову все данные, включая срок действия.", trustDelta: 25, isDangerous: true, explanation: "Эти данные используют для списания." }] },
{ text: "Звонок от 'службы безопасности' Госуслуг: на ваш аккаунт заявка на смену пароля. Назовите код из СМС, чтобы отменить заявку.", answers: [{ text: "Код 0000, отменяйте.", trustDelta: 28, isDangerous: true, explanation: "Код подтверждения – вход в ваш аккаунт." }, { text: "Завершу разговор и зайду в личный кабинет через приложение.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Подождите, сейчас скажу пароль от почты.", trustDelta: 30, isDangerous: true, explanation: "Пароль от почты даст доступ к восстановлению паролей." }, { text: "Диктую паспортные данные.", trustDelta: 18, isDangerous: true, explanation: "Личные данные помогут оформить микрозайм." }] },
{ text: "СМС: 'Ваш номер участвовал в розыгрыше. Зайдите на сайт poisk-dengi.ru и введите данные для получения приза'.", answers: [{ text: "Перехожу и ввожу номер карты.", trustDelta: 25, isDangerous: true, explanation: "Фишинговый сайт украдёт данные." }, { text: "Не перехожу, игнорирую СМС.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "Ввожу логин и пароль от госуслуг.", trustDelta: 28, isDangerous: true, explanation: "Так мошенники получат доступ к вашим данным." }, { text: "Отправляю ответное СМС на короткий номер.", trustDelta: 15, isDangerous: true, explanation: "Могут списать деньги за СМС." }] },
{ text: "Звонок: «Я робот-помощник, для продолжения разговора назовите цифры с вашей карты».", answers: [{ text: "Номер карты: 1234 5678 9012 3456", trustDelta: 20, isDangerous: true, explanation: "Робот не может быть из банка." }, { text: "Кладу трубку.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "CVV: 123", trustDelta: 30, isDangerous: true, explanation: "CVV – для интернет-платежей." }, { text: "Пин-код: 1234", trustDelta: 28, isDangerous: true, explanation: "Пин-код никогда не спрашивают." }] },
{ text: "В подъезде подходит человек в форме и говорит: 'Проводим замену счетчиков, нужно назвать код из СМС, чтобы подтвердить запись'.", answers: [{ text: "Диктую код: 7890", trustDelta: 20, isDangerous: true, explanation: "СМС-коды могут подтвердить платёж." }, { text: "Откажусь и позвоню в управляющую компанию.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "Покажу паспорт, чтобы подтвердить личность.", trustDelta: 15, isDangerous: true, explanation: "Паспорт можно сфотографировать и использовать." }, { text: "Назову адрес и ФИО полностью.", trustDelta: 12, isDangerous: true, explanation: "Это личная информация." }] },
{ text: "Звонок от 'службы доставки': ваша посылка задержана, заплатите пошлину 500 руб. Назовите данные карты.", answers: [{ text: "Данные карты: 1234 5678 9012 3456, срок 12/26", trustDelta: 25, isDangerous: true, explanation: "Мошенники украдут деньги." }, { text: "Проверю трек-номер на официальном сайте почты.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Согласен, переведу через СБП по номеру телефона.", trustDelta: 18, isDangerous: true, explanation: "Перевод мошеннику, а не за посылку." }, { text: "Диктую CVV для оплаты.", trustDelta: 28, isDangerous: true, explanation: "CVV достаточно для оплаты без вас." }] },
{ text: "К вам в соцсетях пишет друг с просьбой срочно одолжить 10 000 на операцию. Голосовое сообщение похоже на друга.", answers: [{ text: "Перевожу по номеру карты, который прислал друг.", trustDelta: 30, isDangerous: true, explanation: "Аккаунт могли взломать, голос синтезирован." }, { text: "Перезвоню другу по видеосвязи, чтобы убедиться.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Спрашиваю, что случилось, и перевожу часть суммы.", trustDelta: 20, isDangerous: true, explanation: "Не переводите без личного разговора." }, { text: "Даю код из СМС для подтверждения перевода.", trustDelta: 28, isDangerous: true, explanation: "Код даст доступ к вашему кошельку." }] },
{ text: "Звонок: «Ваш антивирус просрочен. Для продления назовите данные карты».", answers: [{ text: "Карта 1234 5678 9012 3456, CVV 123", trustDelta: 25, isDangerous: true, explanation: "Не покупайте услуги по телефону у незнакомцев." }, { text: "Проверю в лицензионном приложении антивируса.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Сколько стоит? Переведу по номеру телефона.", trustDelta: 18, isDangerous: true, explanation: "Перевод на личную карту мошенника." }, { text: "Диктую пин-код для верификации.", trustDelta: 28, isDangerous: true, explanation: "Пин-код не нужен для продления." }] },
{ text: "Пришло письмо на работу от 'налоговой' с требованием оплатить штраф по ссылке. В письме ваши реальные данные.", answers: [{ text: "Перехожу по ссылке и оплачиваю картой.", trustDelta: 30, isDangerous: true, explanation: "Фишинг, данные украдут." }, { text: "Открываю сайт налоговой вручную и проверяю задолженность.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Ввожу логин и пароль от госуслуг на той странице.", trustDelta: 28, isDangerous: true, explanation: "Ваши учётные данные украдут." }, { text: "Скачиваю прикреплённый файл со штрафом.", trustDelta: 20, isDangerous: true, explanation: "Файл может содержать вирус." }] },
{ text: "Звонок от 'сотрудника ЦБ': ваши деньги пытаются украсть, срочно переведите их на резервный счёт. Назовите код из СМС.", answers: [{ text: "Код 1234, перевожу все сбережения.", trustDelta: 35, isDangerous: true, explanation: "Центробанк не звонит гражданам." }, { text: "Перезвоню в свой банк по номеру с карты.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Диктую номер карты и CVV.", trustDelta: 28, isDangerous: true, explanation: "Ваши данные для перевода." }, { text: "Какой резервный счёт? Дайте реквизиты.", trustDelta: 20, isDangerous: true, explanation: "Счёт мошенника." }] },
{ text: "Вам звонят и представляются сотрудником магазина: 'Вы оформили заказ на 100 000 руб. Подтвердите отмену кодом из СМС'.", answers: [{ text: "Да, отменяю, код 7890", trustDelta: 25, isDangerous: true, explanation: "Код подтвердит списание денег." }, { text: "Проверю в личном кабинете магазина наличие заказа.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Я не оформлял заказ! Вот мои паспортные данные.", trustDelta: 20, isDangerous: true, explanation: "Мошенники собирают личную информацию." }, { text: "Диктую CVV карты, чтобы вас опознать.", trustDelta: 28, isDangerous: true, explanation: "CVV для подтверждения покупок." }] },
{ text: "Вы слышите автоответчик: «Ваш интернет-банк заблокирован. Нажмите 1 и введите код из СМС для разблокировки».", answers: [{ text: "Нажимаю 1 и ввожу код 1111", trustDelta: 25, isDangerous: true, explanation: "Это поддельный автоответчик." }, { text: "Кладу трубку и захожу в приложение банка.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Диктую свой пин-код по тонам.", trustDelta: 30, isDangerous: true, explanation: "Пин-код утечёт мошенникам." }, { text: "Называю номер карты для идентификации.", trustDelta: 18, isDangerous: true, explanation: "Номер карты могут использовать." }] },
{ text: "Звонок от 'врача': ваш родственник попал в больницу, нужна срочная операция. Переведите 50 000 на карту главврача.", answers: [{ text: "Перевожу деньги, здоровье дороже.", trustDelta: 35, isDangerous: true, explanation: "Распространённая схема: попробуйте дозвониться родственнику." }, { text: "Сначала позвоню родственнику или коллегам.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Диктую данные своей карты для перевода.", trustDelta: 28, isDangerous: true, explanation: "Мошенники спишут ваши деньги." }, { text: "Как зовут родственника? Назовите диагноз.", trustDelta: 15, isDangerous: true, explanation: "Мошенник может подготовиться, лучше прекратить диалог." }] },
{ text: "Вам приходит СМС от 'банка': ваша карта зачислена в программу лояльности. Для активации перейдите по ссылке bank-akcii.ru.", answers: [{ text: "Перехожу и ввожу номер карты и пароль от интернет-банка.", trustDelta: 30, isDangerous: true, explanation: "Поддельный сайт для кражи логина и пароля." }, { text: "Не перехожу, так как знаю, что банк не рассылает такие ссылки.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Ввожу код из СМС на той странице.", trustDelta: 28, isDangerous: true, explanation: "Код подтверждения для мошенников." }, { text: "Ввожу только номер карты, без CVV.", trustDelta: 15, isDangerous: true, explanation: "Номера карты достаточно для некоторых мошенничеств." }] },
{ text: "Звонок: «Это компания по возврату денег после мошенников. Назовите данные карты, с которой были списаны деньги, и мы их вернём».", answers: [{ text: "Карта 1234 5678 9012 3456, CVV 123", trustDelta: 30, isDangerous: true, explanation: "Вас пытаются повторно обмануть." }, { text: "Положу трубку и сам позвоню в банк.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Да, вот мой логин и пароль от банка.", trustDelta: 32, isDangerous: true, explanation: "Мошенники получат полный доступ." }, { text: "Диктую пин-код, чтобы идентифицировать потерю.", trustDelta: 28, isDangerous: true, explanation: "Пин-код – ключ к карте." }] },
{ text: "Вам звонит 'инженер' и говорит, что на вашем компьютере вирусы, и просит установить программу удалённого доступа.", answers: [{ text: "Устанавливаю, чтобы он помог.", trustDelta: 35, isDangerous: true, explanation: "Мошенник украдёт файлы и данные." }, { text: "Отказываю и сам проверяю компьютер антивирусом.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Даю ему пароль от своего пользователя.", trustDelta: 28, isDangerous: true, explanation: "Пароль даст доступ к вашему ПК." }, { text: "Сообщаю ему свои банковские пароли для проверки.", trustDelta: 30, isDangerous: true, explanation: "Кража аккаунтов." }] },
{ text: "Предлагают 'халявные' биткоины: введите seed-фразу вашего криптокошелька для проверки и получите бонус.", answers: [{ text: "Ввожу seed-фразу: ...", trustDelta: 40, isDangerous: true, explanation: "Seed-фраза = доступ ко всем вашим криптовалютам." }, { text: "Понимаю, что это мошенничество, не ввожу.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Ввожу свой логин и пароль от биржи.", trustDelta: 28, isDangerous: true, explanation: "Угонят аккаунт." }, { text: "Перехожу по ссылке и устанавливаю 'кошелёк'.", trustDelta: 20, isDangerous: true, explanation: "Вредоносное ПО." }] },
{ text: "На сайте объявлений просят предоплату за товар, а после перевода пропадают. Что делать, чтобы не попасться?", answers: [{ text: "Перевожу предоплату, если продавец кажется надёжным.", trustDelta: 25, isDangerous: true, explanation: "Риск нарваться на мошенника." }, { text: "Встречаюсь лично и плачу при получении.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Отправляю фото паспорта в подтверждение.", trustDelta: 18, isDangerous: true, explanation: "Паспорт могут использовать." }, { text: "Диктую CVV карты для оплаты.", trustDelta: 28, isDangerous: true, explanation: "CVV не нужен для перевода." }] },
{ text: "Звонок от 'службы безопасности' с уведомлением, что с вашей карты пытаются снять деньги за VPN. Для отмены назовите код из СМС.", answers: [{ text: "Код 4821, отменяйте.", trustDelta: 28, isDangerous: true, explanation: "Код подтвердит платёж." }, { text: "Завершаю звонок и сам звоню в банк.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Диктую данные карты, чтобы они проверили.", trustDelta: 30, isDangerous: true, explanation: "Мошенники спишут деньги." }, { text: "Назову пин-код для верификации личности.", trustDelta: 32, isDangerous: true, explanation: "Пин-код выдаёт вас с головой." }] },
{ text: "Вам звонят и представляются сотрудником МФЦ: для записи на приём нужно назвать код из СМС.", answers: [{ text: "Диктую код: 1111", trustDelta: 15, isDangerous: true, explanation: "Код может подтвердить платёж." }, { text: "Запишусь самостоятельно через госуслуги.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "Назову паспортные данные для уточнения.", trustDelta: 18, isDangerous: true, explanation: "Личные данные используют в мошенничестве." }, { text: "Сообщаю номер СНИЛС.", trustDelta: 12, isDangerous: true, explanation: "СНИЛС поможет в фишинге." }] },
{ text: "Вы получаете сообщение в Telegram от 'администратора' канала: ваш аккаунт заблокирован, перейдите по ссылке для разблокировки.", answers: [{ text: "Перехожу и ввожу свой номер телефона и пароль.", trustDelta: 25, isDangerous: true, explanation: "Фишинговая страница." }, { text: "Не перехожу, сообщаю о нарушении администрации.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Ввожу код из СМС на той странице.", trustDelta: 28, isDangerous: true, explanation: "Угонят аккаунт." }, { text: "Скачиваю файл, который прикреплён.", trustDelta: 20, isDangerous: true, explanation: "Вирус." }] },
{ text: "Звонок от 'сотрудника банка' о выгодном кредите. Для оформления нужно назвать данные карты для перевода одобренной суммы.", answers: [{ text: "Диктую данные карты, включая CVV.", trustDelta: 30, isDangerous: true, explanation: "С карты спишут деньги." }, { text: "Отказываюсь и звоню в банк для проверки.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Сообщаю логин и пароль от интернет-банка для оформления.", trustDelta: 32, isDangerous: true, explanation: "Полный доступ." }, { text: "Диктую пин-код для верификации.", trustDelta: 28, isDangerous: true, explanation: "Пин-код – тайна." }] },
{ text: "В мессенджере приходит голосовое сообщение от 'мамы': у неё украли телефон, срочно переведите 20 000 на номер +7...", answers: [{ text: "Перевожу, голос похож.", trustDelta: 28, isDangerous: true, explanation: "Голос могли подделать нейросетью." }, { text: "Пытаюсь дозвониться на старый номер мамы.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Спрашиваю кодовое слово, которое знаем только мы.", trustDelta: -10, isDangerous: false, explanation: "Безопасный способ проверки." }, { text: "Диктую CVV для перевода.", trustDelta: 30, isDangerous: true, explanation: "CVV не нужен для перевода по номеру телефона." }] },
{ text: "На электронную почту приходит чек на 5000 руб. от неизвестного магазина. Внизу номер телефона для отмены операции.", answers: [{ text: "Звоню по указанному номеру и диктую данные карты для отмены.", trustDelta: 30, isDangerous: true, explanation: "Чек поддельный, номер мошенников." }, { text: "Ничего не делаю, проверяю свой банк через приложение.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Перехожу по ссылке в чеке, чтобы заблокировать платёж.", trustDelta: 28, isDangerous: true, explanation: "Фишинговая ссылка." }, { text: "Отправляю СМС на короткий номер из чека.", trustDelta: 15, isDangerous: true, explanation: "Списание денег за СМС." }] },
{ text: "Звонок от 'полиции' с сообщением, что ваш родственник задержан, и нужно заплатить штраф, чтобы его отпустили.", answers: [{ text: "Согласен, сколько и куда перевести?", trustDelta: 35, isDangerous: true, explanation: "Схема 'Ваш сын в полиции'." }, { text: "Перезваниваю родственнику напрямую.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Диктую данные карты для оплаты штрафа.", trustDelta: 28, isDangerous: true, explanation: "Перевод мошенникам." }, { text: "Даю пин-код своей карты.", trustDelta: 30, isDangerous: true, explanation: "Пин-код нельзя давать." }] },
{ text: "Вы скачали приложение, оно просит доступ к СМС, звонкам и контактам. Даёте?", answers: [{ text: "Даю, чтобы приложение работало.", trustDelta: 25, isDangerous: true, explanation: "Вредоносное ПО перехватит СМС и пароли." }, { text: "Отказываю и удаляю приложение.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Даю, но потом отключу.", trustDelta: 20, isDangerous: true, explanation: "За это время данные уже могут украсть." }, { text: "Даю, если приложение очень нужно.", trustDelta: 22, isDangerous: true, explanation: "Риск кражи данных." }] },
{ text: "Вам звонят из 'энергосбыта': просрочена оплата, отключат свет через час. Назовите код из СМС для подтверждения оплаты.", answers: [{ text: "Код 4821, оплачиваю.", trustDelta: 25, isDangerous: true, explanation: "Мошенники спишут деньги." }, { text: "Проверяю задолженность в личном кабинете энергосбыта.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Диктую номер карты и CVV для оплаты.", trustDelta: 28, isDangerous: true, explanation: "Угон данных карты." }, { text: "Оплачу через терминал, назовите номер лицевого счёта.", trustDelta: 10, isDangerous: true, explanation: "Номер может быть ложным." }] },
{ text: "Пришло СМС: 'Ваш номер выиграл машину! Зайдите на сайт prize-auto.ru и введите данные для получения'.", answers: [{ text: "Захожу и ввожу все данные карты.", trustDelta: 35, isDangerous: true, explanation: "100% фишинг." }, { text: "Игнорирую, так как в розыгрышах не участвовал.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Ввожу паспортные данные и СНИЛС.", trustDelta: 28, isDangerous: true, explanation: "Соберут личную информацию." }, { text: "Отправляю СМС на указанный номер.", trustDelta: 15, isDangerous: true, explanation: "Спишут деньги." }] },
{ text: "Звонок: 'Это финансовая организация, поможем списать долги по кредитам. Назовите данные карты для внесения комиссии'.", answers: [{ text: "Диктую карту: 1234 5678 9012 3456, CVV 123", trustDelta: 30, isDangerous: true, explanation: "Мошенники возьмут комиссию, а долги не спишут." }, { text: "Откажусь, свяжусь с банком по поводу реструктуризации.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Даю пин-код для верификации.", trustDelta: 28, isDangerous: true, explanation: "Пин-код даёт доступ ко всем счетам." }, { text: "Перевожу комиссию по номеру карты оператора.", trustDelta: 25, isDangerous: true, explanation: "Деньги уйдут мошенникам." }] },
{ text: "Вам звонит 'сотрудник портала Госуслуги' и говорит, что ваша учётная запись взломана. Для спасения назовите код из СМС.", answers: [{ text: "Код 0000, спасайте.", trustDelta: 28, isDangerous: true, explanation: "Код – вход в ваш кабинет." }, { text: "Завершу звонок и сам зайду на госуслуги через браузер.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Диктую пароль от личного кабинета.", trustDelta: 30, isDangerous: true, explanation: "Угонят аккаунт." }, { text: "Назову паспортные данные и СНИЛС.", trustDelta: 20, isDangerous: true, explanation: "Мошенники оформят микрозайм." }] },
{ text: "Вы заказали пиццу, курьер просит назвать код из СМС для подтверждения оплаты. Карта уже оплачена онлайн.", answers: [{ text: "Диктую код: 1234", trustDelta: 20, isDangerous: true, explanation: "Этот код может подтвердить дополнительное списание." }, { text: "Отказываю, так как оплата уже прошла.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "Даю CVV для верификации.", trustDelta: 25, isDangerous: true, explanation: "CVV позволит оплатить без вас." }, { text: "Сообщаю пин-код карты для сверки.", trustDelta: 28, isDangerous: true, explanation: "Пин-код никому не говорят." }] },
{ text: "Звонок якобы от 'ФСБ': вы подозреваетесь в экстремизме, нужно перевести деньги на проверочный счёт.", answers: [{ text: "Перевожу всё, что есть.", trustDelta: 40, isDangerous: true, explanation: "Схема запугивания." }, { text: "Перезваниваю в официальные органы по справочному номеру.", trustDelta: -30, isDangerous: false, explanation: " " }, { text: "Диктую данные карты для проверки.", trustDelta: 30, isDangerous: true, explanation: "Мошенники получат доступ." }, { text: "Даю пароли от всех счетов.", trustDelta: 35, isDangerous: true, explanation: "Катастрофа." }] },
{ text: "Ваш друг в соцсети пишет, что участвует в конкурсе и просит проголосовать по ссылке. Ссылка ведёт на страницу входа ВКонтакте.", answers: [{ text: "Ввожу логин и пароль, чтобы проголосовать.", trustDelta: 25, isDangerous: true, explanation: "Фишинговая страница украдёт аккаунт." }, { text: "Не перехожу, пишу другу в другом мессенджере, его ли это просьба.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Перехожу и скачиваю приложение для голосования.", trustDelta: 20, isDangerous: true, explanation: "Вредоносное ПО." }, { text: "Голосую, вводя свой номер телефона.", trustDelta: 15, isDangerous: true, explanation: "Ваш номер могут использовать." }] },
{ text: "Звонок от 'провайдера': у вас заканчивается трафик, назовите код из СМС для продления.", answers: [{ text: "Код 1111, продлевайте.", trustDelta: 15, isDangerous: true, explanation: "Код подтвердит платёж." }, { text: "Захожу в личный кабинет провайдера самостоятельно.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "Диктую номер карты для оплаты.", trustDelta: 20, isDangerous: true, explanation: "Мошенники могут списать деньги." }, { text: "Назову паспортные данные, чтобы идентифицировать.", trustDelta: 12, isDangerous: true, explanation: "Личные данные в чужих руках." }] },
{ text: "Приходит ссылка от 'коллеги' в мессенджере: 'Смотри, что про тебя пишут! (ссылка)'.", answers: [{ text: "Перехожу по ссылке, интересно же.", trustDelta: 20, isDangerous: true, explanation: "Вредоносная ссылка для кражи данных." }, { text: "Спрашиваю коллегу лично, что это за ссылка.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Копирую ссылку и вставляю в браузер.", trustDelta: 15, isDangerous: true, explanation: "Всё равно перешли." }, { text: "Нажимаю на ссылку с телефона, он защищён.", trustDelta: 18, isDangerous: true, explanation: "Телефон тоже уязвим." }] },
{ text: "Звонок: 'Ваш аккаунт на бирже криптовалют заблокирован. Для восстановления назовите seed-фразу'.", answers: [{ text: "Seed: abandon art ...", trustDelta: 40, isDangerous: true, explanation: "Seed-фраза – ключ к кошельку." }, { text: "Захожу на официальный сайт биржи через браузер.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Диктую логин и пароль от биржи.", trustDelta: 28, isDangerous: true, explanation: "Аккаунт украдут." }, { text: "Даю код из Google Authenticator.", trustDelta: 30, isDangerous: true, explanation: "Доступ к двухфакторке." }] },
{ text: "Вам звонят с неизвестного номера и молчат в трубку. Что делать?", answers: [{ text: "Жду, что скажут.", trustDelta: 10, isDangerous: true, explanation: "Так мошенники проверяют активные номера." }, { text: "Кладу трубку.", trustDelta: -15, isDangerous: false, explanation: " " }, { text: "Начинаю сам задавать вопросы.", trustDelta: 5, isDangerous: true, explanation: "Могут записать голос для синтеза." }, { text: "Перезваниваю на этот номер.", trustDelta: 8, isDangerous: true, explanation: "Могут быть большие расходы за звонок." }] },
{ text: "Пришло СМС: 'Деньги переведены. Если не вы, то перейдите по ссылке для отмены'.", answers: [{ text: "Перехожу по ссылке, чтобы отменить.", trustDelta: 25, isDangerous: true, explanation: "Фишинг для сбора данных." }, { text: "Проверяю баланс в мобильном банке.", trustDelta: -22, isDangerous: false, explanation: " " }, { text: "Отвечаю на СМС словом STOP.", trustDelta: 12, isDangerous: true, explanation: "Могут списать деньги за СМС." }, { text: "Звоню по номеру из СМС.", trustDelta: 18, isDangerous: true, explanation: "Платная линия мошенников." }] },
{ text: "Вам звонит 'коллектор' и требует немедленно погасить несуществующий долг, угрожает.", answers: [{ text: "Перевожу деньги, чтобы отвязались.", trustDelta: 35, isDangerous: true, explanation: "Долга нет, это вымогательство." }, { text: "Кладу трубку и обращаюсь в полицию.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Диктую данные карты для оплаты.", trustDelta: 28, isDangerous: true, explanation: "Угонят деньги." }, { text: "Сообщаю пин-код для верификации.", trustDelta: 30, isDangerous: true, explanation: "Кража." }] },
{ text: "Вы переходите в кафе, кто-то просит на секунду ваш телефон для звонка. Даёте?", answers: [{ text: "Даю, человек в беде.", trustDelta: 15, isDangerous: true, explanation: "Могут установить шпионское ПО или украсть данные." }, { text: "Предлагаю помочь набрать номер самому на громкой связи.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "Даю, но слежу за ним.", trustDelta: 10, isDangerous: true, explanation: "Риск остаётся высоким." }, { text: "Даю разблокированный телефон.", trustDelta: 18, isDangerous: true, explanation: "Легко украсть аккаунты." }] },
{ text: "Звонок: 'Мы из магазина, вы выиграли скидку 90%. Назовите код из СМС для подтверждения заказа'.", answers: [{ text: "Код 7812, подтверждаю.", trustDelta: 20, isDangerous: true, explanation: "Код может списать деньги." }, { text: "Отказываюсь и проверяю магазин.", trustDelta: -20, isDangerous: false, explanation: " " }, { text: "Диктую номер карты и срок действия.", trustDelta: 25, isDangerous: true, explanation: "Мошенники украдут данные." }, { text: "Даю CVV для начисления скидки.", trustDelta: 28, isDangerous: true, explanation: "CVV для оплаты." }] },
{ text: "В аэропорту подходит человек и просит 'одолжить' телефон для звонка за границу. Что делать?", answers: [{ text: "Даю телефон, раз человек просит.", trustDelta: 20, isDangerous: true, explanation: "Могут совершить дорогой звонок или украсть данные." }, { text: "Отказываю, предлагаю воспользоваться таксофоном или обратиться к сотрудникам.", trustDelta: -25, isDangerous: false, explanation: " " }, { text: "Набираю номер сам и даю говорить по громкой.", trustDelta: -10, isDangerous: false, explanation: "Более безопасный вариант." }, { text: "Даю телефон, попросив сразу вернуть.", trustDelta: 15, isDangerous: true, explanation: "Риск остаётся." }] }
];

// ---------- КОД ИГРЫ ----------
let currentIndex = 0;
let trust = 50;
let score = 0;
let gameActive = true;
let isProcessing = false;

const startScreen = document.getElementById('startScreen');
const gameArea = document.getElementById('gameArea');
const dialogText = document.getElementById('dialogText');
const answersDiv = document.getElementById('answerButtons');
const trustBar = document.getElementById('trustBar');
const trustValueSpan = document.getElementById('trustValue');
const riskBadge = document.getElementById('riskBadge');
const scoreSpan = document.getElementById('successCounter');
const dangerModal = new bootstrap.Modal(document.getElementById('dangerModal'));
const victoryModal = new bootstrap.Modal(document.getElementById('victoryModal'));
const dangerExplanation = document.getElementById('dangerExplanation');
const reflectToast = new bootstrap.Toast(document.getElementById('reflectToast'), { autohide: true, delay: 2000 });
const resetToast = new bootstrap.Toast(document.getElementById('resetToast'), { autohide: true, delay: 2000 });

function updateUI() {
    // Обновляем ширину ползунка
    trustBar.style.width = `${trust}%`;
    // Обновляем текст процента
    trustValueSpan.innerText = `${trust}%`;
    // Обновляем счётчик атак
    scoreSpan.innerText = score;
    
    // Обновляем классы риска для ползунка и бейджа
    trustBar.classList.remove('low-risk', 'medium-risk', 'high-risk');
    riskBadge.classList.remove('low', 'medium', 'high');
    
    let riskText = '';
    if (trust <= 30) {
        trustBar.classList.add('low-risk');
        riskText = '🟢 Низкий риск';
        riskBadge.classList.add('low');
    } else if (trust <= 60) {
        trustBar.classList.add('medium-risk');
        riskText = '🟡 Средний риск';
        riskBadge.classList.add('medium');
    } else {
        trustBar.classList.add('high-risk');
        riskText = '🔴 Высокий риск';
        riskBadge.classList.add('high');
    }
    riskBadge.innerHTML = riskText;
}

function addShake() {
    document.body.classList.add('shake-effect');
    setTimeout(() => document.body.classList.remove('shake-effect'), 500);
}

function flashSuccess() {
    trustBar.classList.add('flash-success');
    setTimeout(() => trustBar.classList.remove('flash-success'), 400);
}

function animateCounter() {
    scoreSpan.classList.add('counter-pulse');
    setTimeout(() => scoreSpan.classList.remove('counter-pulse'), 300);
}

function showReflectNotification() {
    reflectToast.show();
    if (typeof canvasConfetti === 'function') {
        canvasConfetti({ particleCount: 50, spread: 60, origin: { y: 0.6 }, colors: ['#b87cff', '#6a0dad'] });
    }
}

function loadScenario() {
    if (!gameActive) return;
    if (currentIndex >= scenarios.length) {
        gameActive = false;
        victoryModal.show();
        return;
    }
    
    const s = scenarios[currentIndex];
    if (!s) {
        gameActive = false;
        victoryModal.show();
        return;
    }
    
    dialogText.style.opacity = '0';
    dialogText.style.transform = 'translateY(10px)';
    setTimeout(() => {
        dialogText.innerText = s.text;
        dialogText.style.opacity = '1';
        dialogText.style.transform = 'translateY(0)';
    }, 150);
    
    const shuffled = [...s.answers];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    answersDiv.innerHTML = '';
    shuffled.forEach((answer, idx) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-neon';
        btn.innerText = answer.text;
        btn.style.setProperty('--order', idx);
        btn.onclick = () => handleAnswer(answer);
        answersDiv.appendChild(btn);
    });
}

function handleAnswer(answer) {
    if (!gameActive || isProcessing) return;
    isProcessing = true;
    
    const allBtns = document.querySelectorAll('#answerButtons .btn');
    allBtns.forEach(btn => btn.disabled = true);

    let delta = answer.trustDelta;
    trust += delta;
    trust = Math.min(100, Math.max(0, trust));
    updateUI();

    if (answer.isDangerous && answer.explanation) {
        dangerExplanation.innerText = answer.explanation;
    } else if (!answer.isDangerous) {
        dangerExplanation.innerText = "Вы выбрали безопасный вариант. Данные не утекли.";
    }

    if (delta > 0) addShake();
    if (!answer.isDangerous && delta < 0) flashSuccess();

    if (trust >= 100) {
        gameActive = false;
        dangerModal.show();
        isProcessing = false;
        return;
    }

    if (trust <= 0) {
        score++;
        updateUI();
        animateCounter();
        showReflectNotification();
        createParticles(window.innerWidth / 2, window.innerHeight / 2, '#b87cff');
        
        if (score >= 5) {
            gameActive = false;
            setTimeout(() => victoryModal.show(), 800);
            isProcessing = false;
            return;
        }

        trust = 50;
        updateUI();
        currentIndex++;
        answersDiv.innerHTML = `<div class="text-center py-4"><div class="spinner-border text-primary" role="status"></div><p class="mt-2">Атака отражена! +1 к защите. Загрузка...</p></div>`;
        
        setTimeout(() => {
            if (gameActive) loadScenario();
            isProcessing = false;
        }, 1000);
        return;
    }

    currentIndex++;
    answersDiv.innerHTML = `<div class="text-center py-4"><div class="spinner-border text-primary" role="status"></div><p class="mt-2">Загрузка...</p></div>`;

    setTimeout(() => {
        if (gameActive) {
            if (currentIndex >= scenarios.length) {
                gameActive = false;
                victoryModal.show();
            } else {
                loadScenario();
            }
        }
        isProcessing = false;
    }, 500);
}

function resetGame() {
    gameActive = false;
    isProcessing = false;
    currentIndex = 0;
    trust = 50;
    score = 0;
    updateUI();
    
    startScreen.style.display = 'none';
    gameArea.style.display = 'block';
    gameActive = true;
    loadScenario();
    resetToast.show();
}

document.getElementById('startGameBtn').onclick = resetGame;
document.getElementById('resetGameBtn').onclick = () => {
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmResetModal'));
    confirmModal.show();
};
document.getElementById('confirmResetBtn').onclick = () => {
    bootstrap.Modal.getInstance(document.getElementById('confirmResetModal')).hide();
    resetGame();
};
document.getElementById('restartFromVictory').onclick = resetGame;
document.getElementById('restartFromDanger').onclick = () => {
    const dangerModalEl = document.getElementById('dangerModal');
    const modalInstance = bootstrap.Modal.getInstance(dangerModalEl);
    if (modalInstance) modalInstance.hide();
    resetGame();
};

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() { 
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles(x, y, color = '#b87cff') {
    for (let i = 0; i < 15; i++) {
        particles.push({ x, y, vx: (Math.random() - 0.5) * 6, vy: (Math.random() - 0.5) * 6 - 2, life: 1, color, size: Math.random() * 4 + 2 });
    }
}

function animateParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let anyAlive = false;
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.vy += 0.2; p.life -= 0.02;
        if (p.life <= 0) { particles.splice(i,1); i--; continue; }
        anyAlive = true;
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
    }
    if (anyAlive) requestAnimationFrame(animateParticles);
}
animateParticles();

gameArea.style.display = 'none';
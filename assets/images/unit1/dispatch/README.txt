ART-BRIEF — Dispatch Game "Rush Hour" (Unit 1 · Reading · Step 4)
=================================================================

СТАТУС: ждём один файл — board.jpg. Код уже подключён и ждёт именно
это имя: как только файл появится, игровое поле подхватится само,
править ничего не нужно. Пока файла нет, поле — тёмная панель со
штриховкой, игра полностью работает.

  board.jpg — игровое поле: нарисованная ночная карта Манхэттена
              сверху (вид с высоты птичьего полёта)

Требования
----------
* Формат JPG, 16:9 (например 1920x1080), фон непрозрачный.
  После генерации пережми в JPEG ~200-300 КБ (как story-сцены) —
  школьный wi-fi скажет спасибо. Исходник — в assets/_original/.
* ПОВЕРХ карты лягут пины с номерами, домик-депо и едущий курьер 🚴,
  а также всплывашки "Delivered! +$8". Поэтому карта должна быть
  СПОКОЙНОЙ и не слишком контрастной: читаемые улицы, но без ярких
  пятен, которые спорили бы с пинами.
* Ориентиры игры (примерно): парк — тёмно-зелёный прямоугольник в
  верхней левой четверти; вода/гавань — нижний правый угол; сетка
  улиц со тёплыми огнями — остальное. Точность не важна, важно
  настроение.
* Никакого текста, надписей и читаемых вывесок.
* Палитра и настроение — по DESIGN-SYSTEM.md §2 (ночь, тёплые огни
  окон на холодной тёмно-синей глубине). Без фотореализма, без 3D,
  без чистого чёрного.

Промпт (EN)
-----------
Painted night-time map of a Manhattan-like city seen straight from
above, stylised bird's-eye view, glowing warm street lights and lit
windows forming a soft grid of streets on deep cool navy blocks
(#070E1A-#1C3050), a dark green rectangular park in the upper left
quarter, dark harbour water in the lower right corner, gentle
atmospheric haze, muted low-contrast palette so UI markers stay
readable on top, no photorealism, no 3D render, no harsh neon, no
pure black, no text, no lettering, no signage, no labels. Widescreen
16:9 composition.


-------------------------------------------------------------------
ВТОРОЙ ФАЙЛ — rider.png (фишка курьера на карте)
-------------------------------------------------------------------

СТАТУС: ждём. Пока файла нет, по карте ездит эмодзи 🚴 — работает,
но выглядит как заглушка.

  rider.png — курьер на велосипеде, вид СВЕРХУ (карта же сверху)

Требования
----------
* Формат PNG, ОБЯЗАТЕЛЬНО с прозрачным фоном (никакого квадрата!).
* Квадрат ~512x512, сам курьер занимает почти весь кадр.
* Вид строго сверху (bird's-eye), как игровая фишка на доске:
  видно шлем, плечи, руль, переднее и заднее колесо, сумку-курьерку
  на спине. Курьер смотрит ВПРАВО (вправо = вперёд по карте).
* На экране это ~50 px, поэтому нужен ЧИТАЕМЫЙ СИЛУЭТ: крупные
  формы, яркий контрастный цвет (тёплый янтарь/оранжевый + светлый
  шлем), тонкий светлый контур по краю, чтобы фишка не терялась на
  тёмной карте с оранжевыми огнями. Никаких мелких деталей и лиц.
* Небольшая мягкая тень под фишкой допустима (она добавит объём),
  но фон всё равно прозрачный.

Промпт (EN)
-----------
Top-down bird's-eye view game token of a bike messenger on a
bicycle, seen strictly from directly above, facing right. Bold
readable silhouette: helmet, shoulders, handlebars, front and rear
wheel, a large courier bag on the back. Warm amber and orange
clothing with a light cream helmet, thin light outline around the
whole shape so it stays visible on a dark map. Painted illustration,
simple bold shapes, no small details, no face, no text. Centred
square composition, isolated on a fully transparent background, PNG
with alpha.

# Szamotulska Drukarnia im. Józefa Kawalera

Website created for a printing house located in Szamotuły, Poland. It's entire code is based on heavily modified version of my [Website Starter Pack](https://github.com/EnslavedEagle/Website-developer-starter-pack) - I came up with pretty good ideas during the development!

![Szamotulska Drukarnia](http://tth.patrykb.pl/_screenshots/screen-drukarnia.jpg)

## Development

The biggest trouble for me was to correctly position the two dwarfs on Home section, I decided to convert the SVG (which originally were over 120 KB big) to non-transparent PNG, since we've been using a white background anyway, and place them in `::before` and `::after` CSS pseudo-elements, positioning them absolutely against the header's content box. Later, they've been given animations named `LeftToRightFadeIn` and `RightToLeftFadeIn`, respectively.

The other big problem for me was the formatting of the business owner's info at the bottom of the page. It was obvious I needed to go with flexbox and I made it go with `row` direction on large screens and `column` for extra small. Then I asked myself if it would be appropriate if I placed links with telephone and e-mail address into an `<address>` element. It turned out, [links **are** allowed inside the `address` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address).

## Design

The website's layout was designed by an extremely talented designer, [Maria Kuzioła](https://www.behance.net/mariakuziola).
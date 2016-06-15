# Content Box

#### Types & Sizes

---

###### Auto distributed column box

This is an evenly distributed content based on the number of columns.

<div class="content-box display">
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
</div>

<div class="content-box display">
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
</div>

```html
<div class="content-box">
  <div class="columns">...</div>
  <!-- You can add more columns here -->
</div>
```

---

###### 1 column box

<div class="content-box--one display">
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
</div>

```html
<div class="content-box--one">
  <div class="columns">...</div>
</div>
```

---

###### 2 columns box

<div class="content-box--two display">
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
</div>

```html
<div class="content-box--two">
  <div class="columns">...</div>
  <div class="columns">...</div>
</div>
```

---

###### 3 columns box

<div class="content-box--three display">
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
</div>

```html
<div class="content-box--three">
  <div class="columns">...</div>
  <div class="columns">...</div>
</div>
```

---

###### 4 columns box

<div class="content-box--four display">
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
</div>

```html
<div class="content-box--four">
  <div class="columns">...</div>
  <div class="columns">...</div>
</div>
```

---

###### 5 columns box

<div class="content-box--five display">
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
</div>

```html
<div class="content-box--five">
  <div class="columns">...</div>
  <div class="columns">...</div>
</div>
```

---

###### 2 Columns Overflow

<div class="content-box--overflow display">
  <div class="columns _left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns _right"><img src="http://placehold.it/640x320"></div>
</div>

```html
<div class="content-box--overflow">
  <div class="columns _left">...</div>
  <div class="columns _right">By default this is the overflowing column</div>
</div>

Modifier: is-inverted
---------------------

<div class="content-box--overflow is-inverted">
  <div class="columns _left">Now this will be the overflowing column</div>
  <div class="columns _right">...</div>
</div>
```

---

###### 7 by 5 Columns

<div class="content-box--seventh display">
  <div class="columns _left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns _right"><img src="http://placehold.it/455x240"></div>
</div>

```html
<div class="content-box--seventh">
  <div class="columns _left">This is 7 columns</div>
  <div class="columns _right">This is 5 columns</div>
</div>

Modifier: is-inverted
---------------------

<div class="content-box--seventh is-inverted">
  <div class="columns _left">This is 5 columns</div>
  <div class="columns _right">This is 7 columns</div>
</div>
```

---

###### Content Box global modifiers

To <code>vertically align</code> columns in the middle:

<div class="content-box--seventh align-middle display">
  <div class="columns _left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns _right"><img src="http://placehold.it/455x240"></div>
</div>

```html
Modifier: align-middle
---------------------

<!-- Can be any type of content box -->
<div class="content-box--seventh align-middle">
  <div class="columns _left">This is 7 columns</div>
  <div class="columns _right">This is 5 columns</div>
</div>
```

To <code>center align</code> content or image inside a column:

<div class="content-box--seventh display">
  <div class="columns _left text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius in urna vitae venenatis. Duis vitae rhoncus magna. Cras mollis congue tellus, non rutrum massa vestibulum vitae.</div>
  <div class="columns _right text-center"><img src="http://placehold.it/200x240"></div>
</div>

```html
Modifier: text-center
---------------------

<!-- Can be any type of content box -->
<div class="content-box--seventh align-middle">
  <!-- Can be on any of the column -->
  <div class="columns _left text-center">This is 7 columns</div>
  <div class="columns _right text-center">This is 5 columns</div>
</div>
```



# Icon Components

###### Vertical icon & text
<code>figure-icon--vertical</code>

<div class="l-icons">
  <div class="content-box--three">
    <div class="columns">
      <div class="figure-icon--vertical">
        <div class="figure-icon__content">
          <img src="http://placehold.it/80x80">
        </div>
        <div class="figure-icon__content">
          Mobile Internet
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="figure-icon--vertical">
        <div class="figure-icon__content">
          <img src="http://placehold.it/80x80">
        </div>
        <div class="figure-icon__content">
          Mobile Internet
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="figure-icon--vertical">
        <div class="figure-icon__content">
          <img src="http://placehold.it/80x80">
        </div>
        <div class="figure-icon__content">
          Mobile Internet
        </div>
      </div>
    </div>
  </div>
</div>

```html
<!-- Layout modifier that wraps the current available content boxes. -->
<div class="l-icons">
  <!-- Can be of any type of content box with its available modifier(s) -->
  <div class="content-box--three">
    <!-- Can have any amount of column -->
    <div class="columns">
      <div class="figure-icon--vertical">
        <div class="figure-icon__content">
          <img src="http://placehold.it/80x80">
        </div>
        <div class="figure-icon__content">
          Mobile Internet
        </div>
      </div>
    </div>
  </div>
</div>
```

---

###### Horizontal icon & text
<code>figure-icon--horizontal</code>

<br/>

<!-- Layout modifier that wraps the current available content boxes. -->
<div class="l-icons">
  <!-- Can be of any type of content box with its available modifier(s) -->
  <div class="content-box--three">
    <div class="columns">
      <div class="figure-icon--horizontal">
        <div class="figure-icon__content">
          <img src="http://placehold.it/120x120">
        </div>
        <div class="figure-icon__content">
          Tailor-made incentive packages to suit your company needs
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="figure-icon--horizontal">
        <div class="figure-icon__content">
          <img src="http://placehold.it/120x120">
        </div>
        <div class="figure-icon__content">
          Tailor-made incentive packages to suit your company needs
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="figure-icon--horizontal">
        <div class="figure-icon__content">
          <img src="http://placehold.it/120x120">
        </div>
        <div class="figure-icon__content">
          Tailor-made incentive packages to suit your company needs
        </div>
      </div>
    </div>
  </div>
</div>

```html
<!-- Layout modifier that wraps the current available content boxes. -->
<div class="l-icons">
  <!-- Can be of any type of content box with its available modifier(s) -->
  <div class="content-box--three">
    <!-- Can have any amount of column -->
    <div class="columns">
      <div class="figure-icon--horizontal">
        <div class="figure-icon__content">
          <img src="http://placehold.it/120x120">
        </div>
        <div class="figure-icon__content">
          Tailor-made incentive packages to suit your company needs
        </div>
      </div>
    </div>
  </div>
</div>
```



# Stats

<br/>

<div class="l-stats">
  <div class="content-box--three align-center">
    <div class="columns">
      <p class="stat">#1</p>
      <p>Highest English proficiency in Asia</p>
    </div>
    <div class="columns">
      <p class="stat">#3</p>
      <p>Ranks 3rd as a global outsourcing destination</p>
    </div>
    <div class="columns">
      <p class="stat">#5</p>
      <p>Malaysia is able to develop, attract, and retain talent for companies</p>
    </div>
    <div class="columns">
      <p class="stat">#12</p>
      <p>Perceived well abroad through various competitive factors</p>
    </div>
    <div class="columns">
      <p class="stat">#15</p>
      <p>Top destination for international investors</p>
    </div>
    <div class="columns">
      <p class="stat">#18</p>
      <p>Also ranks 2nd in ASEAN as Malaysia’s regulatory environment is conducive for business</p>
    </div>
    <div class="columns">
      <p class="stat">5000</p>
      <p>Foreign companies from more than 40 countries have chosen Malaysia as a premium destination for business</p>
    </div>
  </div>
</div>

```html
<!-- Layout modifier that wraps the current available content boxes. -->
<div class="l-stats">
  <!-- Can be of any type of content box with its available modifier(s) -->
  <div class="content-box--three align-center">
    <!-- Can have any amount of column -->
    <div class="columns">
      <p class="stat">#1</p>
      <p>Highest English proficiency in Asia</p>
    </div>
  </div>
</div>
```



# Process/Steps

<div class="l-process">
  <div class="content-box--five align-center">
    <div class="columns">
      <div class="process">
        <div class="process__headline">
          <sup>Phase</sup>
          <span class="stat">01</span>
        </div>
        <span class="process__seperator"></span>
        <div class="process__description">
          Introduction of smart city foundation (2015)
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="process">
        <div class="process__headline">
          <sup>Phase</sup>
          <span class="stat">02</span>
        </div>
        <span class="process__seperator"></span>
        <div class="process__description">
          Promoting consumption of smart city solutions (2016)
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="process">
        <div class="process__headline">
          <sup>Phase</sup>
          <span class="stat">03</span>
        </div>
        <span class="process__seperator"></span>
        <div class="process__description">
          Integrating solutions for control and monitoring (2017-2018)
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="process">
        <div class="process__headline">
          <sup>Phase</sup>
          <span class="stat">04</span>
        </div>
        <span class="process__seperator"></span>
        <div class="process__description">
          Promoting widespread access and adoption (2019-2020)
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="process">
        <div class="process__headline">
          <sup>Phase</sup>
          <span class="stat">05</span>
        </div>
        <span class="process__seperator"></span>
        <div class="process__description">
          Promoting widespread access and adoption (2019-2020)
        </div>
      </div>
    </div>
  </div>
</div>

```html
<!-- Layout modifier that wraps the current available content boxes. -->
<div class="l-process">
  <!-- Can be of any type of content box with its available modifier(s) -->
  <div class="content-box">
    <!-- Can have any amount of column -->
    <div class="columns">
      <div class="process">
        <div class="process__headline">
          <sup>Phase</sup>
          <span class="stat">01</span>
        </div>
        <span class="process__seperator"></span>
        <div class="process__description">
          Introduction of smart city foundation (2015)
        </div>
      </div>
    </div>
  </div>
</div>
```



# Tiles Components

###### Tiles - medium
<code>.tiles--medium</code>

<br/>

<div class="l-tiles">
  <div class="content-box--two">
    <div class="columns">
      <a href="#">
        <div class="tiles--medium">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/550x400" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
    <div class="columns">
      <a href="#">
        <div class="tiles--medium">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/550x400" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
  </div>
</div>

<br/>

```html
<!-- Layout modifier that wraps the current available content boxes. -->
<div class="l-tiles">
  <!-- Can be of any type of content box with its available modifier(s) -->
  <div class="content-box--two">
    <div class="columns">
      <a href="#">
        <div class="tiles--medium">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/550x400" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
  </div>
</div>
```

---

###### Tiles - long
<code>.tiles--medium</code>

<br/>

<div class="l-tiles">
  <div class="content-box--three">
    <div class="columns">
      <a href="#">
        <div class="tiles--long">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/360x500" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
    <div class="columns">
      <a href="#">
        <div class="tiles--long">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/360x500" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
    <div class="columns">
      <a href="#">
        <div class="tiles--long">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/360x500" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
  </div>
</div>

<br/>

```html
<!-- Layout modifier that wraps the current available content boxes. -->
<div class="l-tiles">
  <!-- Can be of any type of content box with its available modifier(s) -->
  <div class="content-box--three">
    <div class="columns">
      <a href="#">
        <div class="tiles--long">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/360x500" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
  </div>
</div>
```

---

###### Tiles - programme
<code>.tiles--programme</code>

<br/>

<div class="l-tiles">
  <div class="content-box--three">
    <div class="columns">
      <a href="#">
        <div class="tiles--programme">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/360x300" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <div class="tiles__timestamp">
            <span class="tiles__timestamp__date">Dec 16, 2015 - Dec 17, 2015</span>
            <span class="tiles__timestamp__location">LimKokWing University, Cyberjaya</span>
          </div>
        </div>
      </a>
    </div>
    <div class="columns">
      <a href="#">
        <div class="tiles--programme">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/360x300" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <div class="tiles__timestamp">
            <span class="tiles__timestamp__date">Dec 16, 2015 - Dec 17, 2015</span>
            <span class="tiles__timestamp__location">LimKokWing University, Cyberjaya</span>
          </div>
        </div>
      </a>
    </div>
    <div class="columns">
      <a href="#">
        <div class="tiles--programme">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/360x300" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <div class="tiles__timestamp">
            <span class="tiles__timestamp__date">Dec 16, 2015 - Dec 17, 2015</span>
            <span class="tiles__timestamp__location">LimKokWing University, Cyberjaya</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<br/>

```html
<!-- Layout modifier that wraps the current available content boxes. -->
<div class="l-tiles">
  <!-- Can be of any type of content box with its available modifier(s) -->
  <div class="content-box--three">
    <div class="columns">
      <a href="#">
        <div class="tiles--programme">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/360x500" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <div class="tiles__timestamp">
            <span class="tiles__timestamp__date">Dec 16, 2015 - Dec 17, 2015</span>
            <span class="tiles__timestamp__location">LimKokWing University, Cyberjaya</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
```

###### Icon components global modifiers

Removing the label tag:
<code>.no-label</code>

<br/>

<div class="l-tiles">
  <div class="content-box--two">
    <div class="columns">
      <a href="#">
        <div class="tiles--medium no-label">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/550x400" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
    <div class="columns">
      <a href="#">
        <div class="tiles--medium">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/550x400" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
  </div>
</div>

<br/>

```html
<!-- Layout modifier that wraps the current available content boxes. -->
<div class="l-tiles">
  <!-- Can be of any type of content box with its available modifier(s) -->
  <div class="content-box--two">
    <div class="columns">
      <a href="#">
        <!-- Layout modifier -- no-label -->
        <div class="tiles--medium no-label">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/550x400" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
    <div class="columns">
      <a href="#">
        <div class="tiles--medium">
          <span class="label">Success Story</span>
          <img src="http://placehold.it/550x400" />
          <span class="tiles__headline">Cohesive Mobility <br/>Solution (COMOS)</span>
          <span class="tiles__cta">Read more <i class="icon-chevron-small-right align-middle"></i></span>
        </div>
      </a>
    </div>
  </div>
</div>
```



# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #2199e8"></span>
      #2199e8
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #3adb76"></span>
      #3adb76
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ffae00"></span>
      #ffae00
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ec5840"></span>
      #ec5840
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #0a0a0a"></span>
      #0a0a0a
    </div>
  </div>
</div>



# Typography

<p class="lead">This design uses Helvetica Neue for headings and paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.



# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

---

## Learn All About Forms

Check out the [Foundation Docs](http://foundation.zurb.com/sites/docs) to learn about how flexible our forms are for creating different layouts. It works perfectly with the grid to meet all your form needs.

---

## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
```

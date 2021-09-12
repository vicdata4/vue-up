<template>
  <section class="container">
    <h1 class="title">XML Schema</h1>
    <h2 class="title-module">Simple type</h2>
    <p>.xml</p>
    <pre
      class="line-numbers language-markup"
    ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;note&gt;hello&lt;/note&gt;
</code></pre>

    <p>.xsd</p>

        <pre
          class="line-numbers language-markup"
        ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;
	&lt;xs:element name="note" type="xs:string"/&gt;
&lt;/xs:schema&gt;
</code></pre>

    <h2 class="title-module">Complex Type</h2>
    <p>.xml</p>
    <div class="language-plaintext highlighter-rouge">
      <div class="highlight">
        <pre class="line-numbers language-markup"><code>&lt;book&gt;
	&lt;author&gt;Miguel de Cervantes Saavedra&lt;/author&gt;
	&lt;title&gt;El Quijote de la Mancha&lt;/title&gt;
&lt;/book&gt;
</code></pre>
      </div>
    </div>
    <p>.xsd</p>
        <pre
          class="line-numbers language-markup"
        ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;
&lt;xs:element name="book"&gt;
	&lt;xs:complexType&gt;
		&lt;xs:sequence&gt;
			&lt;xs:element name="author" type="xs:string" /&gt;
			&lt;xs:element name="title" type="xs:string" /&gt;
		&lt;/xs:sequence&gt;
	&lt;/xs:complexType&gt;
	&lt;/xs:element&gt;
&lt;/xs:schema&gt;
</code></pre>
    <p>.xml</p>
        <pre class="line-numbers language-markup"><code>&lt;library&gt;
	&lt;book&gt;
		&lt;author&gt;Miguel de Cervantes Saavedra&lt;/author&gt;
		&lt;title&gt;El Quijote de la Mancha&lt;/title&gt;
	&lt;/book&gt;
	&lt;book&gt;
		&lt;author&gt;Dan Brown&lt;/author&gt;
		&lt;title&gt;The Da Vinci Code&lt;/title&gt;
	&lt;/book&gt;
&lt;/library&gt;
</code></pre>
    <p>.xsd</p>
        <pre
          class="line-numbers language-markup"
        ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;
&lt;xs:element name="library"&gt;
	&lt;xs:complexType&gt;
		&lt;xs:sequence&gt;
			&lt;xs:element name="book" minOccurs="0" maxOccurs="unbounded"&gt;
				&lt;xs:complexType&gt;
					&lt;xs:sequence&gt;
						&lt;xs:element name="author" /&gt;
						&lt;xs:element name="title" /&gt;
					&lt;/xs:sequence&gt;
				&lt;/xs:complexType&gt;
			&lt;/xs:element&gt;
		&lt;/xs:sequence&gt;
	&lt;/xs:complexType&gt;
&lt;/xs:element&gt;
&lt;/xs:schema&gt;
</code></pre>

    <h2 class="title-module">Restrictions</h2>
<p>.xml</p>
        <pre
          class="line-numbers language-markup"
        ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;library&gt;
	&lt;book&gt;
		&lt;author&gt;Miguel de Cervantes Saavedra&lt;/author&gt;
		&lt;title&gt;El Quijote de la Mancha&lt;/title&gt;
		&lt;code&gt;123&lt;/code&gt;
    &lt;/book&gt;
  	&lt;book&gt;
  		&lt;author&gt;Dan Brown&lt;/author&gt;
  		&lt;title&gt;The Da Vinci Code&lt;/title&gt;
  		&lt;code&gt;124&lt;/code&gt;
  	&lt;/book&gt;
&lt;/library&gt;
</code></pre>
<p>.xsd</p>
        <pre
          class="line-numbers language-markup"
        ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;
&lt;xs:element name="library"&gt;
	&lt;xs:complexType&gt;
		&lt;xs:sequence&gt;
			&lt;xs:element name="book" minOccurs="0" maxOccurs="unbounded"&gt;
				&lt;xs:complexType&gt;
					&lt;xs:sequence&gt;
						&lt;xs:element name="author" /&gt;
						&lt;xs:element name="title" /&gt;
						&lt;xs:element name="code"&gt;
							&lt;xs:simpleType&gt;
								&lt;xs:restriction base="xs:integer"&gt;
									&lt;xs:minInclusive value="1"/&gt;
									&lt;xs:maxInclusive value="9999"/&gt;
								&lt;/xs:restriction&gt;
							&lt;/xs:simpleType&gt;
						&lt;/xs:element&gt;
					&lt;/xs:sequence&gt;
				&lt;/xs:complexType&gt;
			&lt;/xs:element&gt;
		&lt;/xs:sequence&gt;
	&lt;/xs:complexType&gt;
&lt;/xs:element&gt;
&lt;/xs:schema&gt;
</code></pre>

    <h2 class="title-module">Restrictions II</h2>
<p>.xml</p>
        <pre
          class="line-numbers language-markup"
        ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;library&gt;
	&lt;book&gt;
		&lt;author&gt;Miguel de Cervantes Saavedra&lt;/author&gt;
		&lt;title&gt;El Quijote de la Mancha&lt;/title&gt;
		&lt;code&gt;123&lt;/code&gt;
		&lt;genre&gt;Fantasy&lt;/genre&gt;
	&lt;/book&gt;
	&lt;book&gt;
		&lt;author&gt;Dan Brown&lt;/author&gt;
		&lt;title&gt;The Da Vinci Code&lt;/title&gt;
		&lt;code&gt;124&lt;/code&gt;
		&lt;genre&gt;Thriller&lt;/genre&gt;
	&lt;/book&gt;
&lt;/library&gt;
</code></pre>
<p>.xsd</p>
        <pre
          class="line-numbers language-markup"
        ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;
&lt;xs:element name="library"&gt;
	&lt;xs:complexType&gt;
		&lt;xs:sequence&gt;
			&lt;xs:element name="book" minOccurs="0" maxOccurs="unbounded"&gt;
				&lt;xs:complexType&gt;
					&lt;xs:sequence&gt;
						&lt;xs:element name="author" /&gt;
						&lt;xs:element name="title" /&gt;
						&lt;xs:element name="code"&gt;
							&lt;xs:simpleType&gt;
								&lt;xs:restriction base="xs:integer"&gt;
									&lt;xs:minInclusive value="1"/&gt;
									&lt;xs:maxInclusive value="9999"/&gt;
								&lt;/xs:restriction&gt;
							&lt;/xs:simpleType&gt;
						&lt;/xs:element&gt;
						&lt;xs:element name="genre"&gt;
							&lt;xs:simpleType&gt;
								&lt;xs:restriction base="xs:string"&gt;
									&lt;xs:enumeration value="Action"/&gt;
									&lt;xs:enumeration value="Comedy"/&gt;
									&lt;xs:enumeration value="Drama"/&gt;
									&lt;xs:enumeration value="Fantasy"/&gt;
									&lt;xs:enumeration value="Horror"/&gt;
									&lt;xs:enumeration value="Mystery"/&gt;
									&lt;xs:enumeration value="Romance"/&gt;
									&lt;xs:enumeration value="Thriller"/&gt;
								&lt;/xs:restriction&gt;
							&lt;/xs:simpleType&gt;
						&lt;/xs:element&gt;
					&lt;/xs:sequence&gt;
				&lt;/xs:complexType&gt;
			&lt;/xs:element&gt;
		&lt;/xs:sequence&gt;
	&lt;/xs:complexType&gt;
&lt;/xs:element&gt;
&lt;/xs:schema&gt;
</code></pre>

    <h2 class="title-module">Attributes</h2>
<p>.xml</p>
        <pre
          class="line-numbers language-markup"
        ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;library&gt;
	&lt;book code="123" genre="Fantasy"&gt;
		&lt;author&gt;Miguel de Cervantes Saavedra&lt;/author&gt;
		&lt;title&gt;El Quijote de la Mancha&lt;/title&gt;
	&lt;/book&gt;
	&lt;book code="1023" genre="Thriller"&gt;
		&lt;author&gt;Dan Brown&lt;/author&gt;
		&lt;title&gt;The Da Vinci Code&lt;/title&gt;
	&lt;/book&gt;
&lt;/library&gt;
</code></pre>
<p>.xsd</p>
        <pre
          class="line-numbers language-markup"
        ><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;
&lt;xs:element name="biblioteca"&gt;
	&lt;xs:complexType&gt;
		&lt;xs:sequence&gt;
			&lt;xs:element name="libro" minOccurs="0" maxOccurs="unbounded"&gt;
				&lt;xs:complexType&gt;
					&lt;xs:sequence&gt;
						&lt;xs:element name="author" /&gt;
						&lt;xs:element name="title" /&gt;
					&lt;/xs:sequence&gt;
					&lt;xs:attribute name="code"&gt;
						&lt;xs:simpleType&gt;
							&lt;xs:restriction base="xs:integer"&gt;
								&lt;xs:minInclusive value="1"/&gt;
								&lt;xs:maxInclusive value="9999"/&gt;
							&lt;/xs:restriction&gt;
						&lt;/xs:simpleType&gt;
					&lt;/xs:attribute&gt;
					&lt;xs:attribute name="genre"&gt;
						&lt;xs:simpleType&gt;
							&lt;xs:restriction base="xs:string"&gt;
								&lt;xs:enumeration value="Action"/&gt;
								&lt;xs:enumeration value="Comedy"/&gt;
								&lt;xs:enumeration value="Drama"/&gt;
								&lt;xs:enumeration value="Fantasy"/&gt;
								&lt;xs:enumeration value="Horror"/&gt;
								&lt;xs:enumeration value="Mystery"/&gt;
								&lt;xs:enumeration value="Romance"/&gt;
								&lt;xs:enumeration value="Thriller"/&gt;
							&lt;/xs:restriction&gt;
						&lt;/xs:simpleType&gt;
					&lt;/xs:attribute&gt;
				&lt;/xs:complexType&gt;
			&lt;/xs:element&gt;
		&lt;/xs:sequence&gt;
	&lt;/xs:complexType&gt;
&lt;/xs:element&gt;
&lt;/xs:schema&gt;
</code></pre>
  </section>
</template>

<script>
import { pageInit } from "/components/utils/prism";

export default {
  mounted() {
    pageInit();
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 400px;
  resize: none;
}
</style>

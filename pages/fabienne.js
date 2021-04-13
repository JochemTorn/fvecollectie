import Head from 'next/head'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Artwork from '../components/Artwork'
import Layout from '../components/layout/Layout'

export default function Fabienne() {
    return (
        <div>
        <Layout>
            
<h1 className="title text-3xl mb-3">Der FVE Gesang</h1>
<div className="grid grid-cols-2">
<p>Auf die Region lebt ein kleines Lehrerin (xxx)<br/><span className="italic text-red-500">Op het Streek woont een kleine lerares</span><br/>
und sie heißt: (xxx) Fabienne. (xxx)<br/><span className="italic text-red-500">En ze heet: Fabienne</span><br/>
Heiß von hunderttausend kleinen Studenten (xxx)<br/><span className="italic text-red-500">Gretig honderd duizend kleine leerlingen,</span><br/>
wird umschwärmt (xxx) Fabienne (xxx)<br/><span className="italic text-red-500">hangen rond: Fabienne</span><br/>
denn ihr Lehre ist voll auf Garäusch, (xxx)<br/><span className="italic text-red-500">Want haar les is vol met lawaai</span><br/>
zarter Duft entströmt dem Blütenkleid. (xxx)<br/><span className="italic text-red-500"></span>
Auf die Region lebt ein kleines Lehrerin (xxx)<br/><span className="italic text-red-500">Op het Streek woont een kleine lerares</span><br/>und sie heißt: (xxx) Fabienne. (xxx)<br/><span className="italic text-red-500"></span><br/>

In der Heimat wohnt ein kleines Mägdelein<br/><span className="italic text-red-500"></span>
und sie heißt: Fabienne.<br/><span className="italic text-red-500"></span>
Dieses Mädel ist mein treues Schätzelein<br/><span className="italic text-red-500"></span>
und mein Glück, Fabienne.<br/><span className="italic text-red-500"></span>
Wenn das Heidekraut rot-lila blüht,<br/><span className="italic text-red-500"></span>
singe ich zum Gruß ihr dieses Lied.<br/><span className="italic text-red-500"></span>
Auf der Heide blüht ein kleines Blümelein<br/><span className="italic text-red-500"></span>
und sie heißt: Fabienne.<br/><span className="italic text-red-500"></span><br/>

In mein'm Kämmerlein blüht auch ein Blümelein<br/><span className="italic text-red-500"></span>
und sie heißt: Fabienne.<br/><span className="italic text-red-500"></span>
Schon beim Morgengrau'n sowie beim Dämmerschein<br/><span className="italic text-red-500"></span>
schaut's mich an, Fabienne.<br/><span className="italic text-red-500"></span>
Und dann ist es mir, als spräch' es laut:<br/><span className="italic text-red-500"></span>
"Denkst du auch an deine kleine Braut?"<br/><span className="italic text-red-500"></span>
In der Heimat weint um dich ein Mägdelein<br/><span className="italic text-red-500"></span>
und sie heißt: Fabienne.<br/><span className="italic text-red-500"></span></p>
<audio controls>
    <source src="erika.mp3" type="audio/mp3"/>
</audio>
</div>
        </Layout>
        </div>
    )
}
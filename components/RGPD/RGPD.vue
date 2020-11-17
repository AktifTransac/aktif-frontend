<template>
  <div id="rgpd-wrapper">
    <section id="rgpd">
      <article>
        <h3>
          {{ $t('rgpd.title') }}
        </h3>
        <ul>
          <li>
            {{ $t('rgpd.1') }}
          </li>
          <li>
            {{ $t('rgpd.2') }}
          </li>
        </ul>
      </article>
      <article id="law" @scroll="handleScroll">
        <h4>POLITIQUE DE PROTECTION DES DONNEES</h4>

        <h5>I) Identité du responsable du traitement</h5>
        <dl>
          <dd>
            Société Eurl UNIK IMMOBILIER au capital de 10000.00 €, immatriculée
            au Registre du Commerce et des Sociétés sous le numéro et dont le
            siège social se situe 23 AV G.Clemenceau 34000 MONTPELLIER (ci-après
            « la Société »), cette société intervenant tant pour elle-même que
            pour les sociétés membres de son groupe.
          </dd>
        </dl>

        <h5>II) Terminologie</h5>
        <dl>
          <dd>
            Utilisateur : toute personne physique, possédant un compte ou non,
            utilisant les services ou le Site de la Société en qualité de client
            ou de simple visiteur du Site.
          </dd>
          <dd>Site : il s’agit du site unik-immo.com de la Société.</dd>
        </dl>

        <h5>
          III) Collecte, conditions et finalités du traitement des données
        </h5>
        <dl>
          <dd>
            La Société collecte des données à caractère personnel (nom, prénom,
            adresse domicile et électronique, n° de téléphone, adresse IP,
            photos du bien...) de l’Utilisateur naviguant, consultant et/ou
            saisissant des informations personnelles sur notre Site afin d’avoir
            accès à nos services.
          </dd>
          <dt>Cette collecte de données s’effectue lorsque l’Utilisateur :</dt>
          <dd>
            s’inscrit aux alertes proposées par la Société, effectue une demande
            de retour sur le site
          </dd>
          <dd>
            contacte le Service Client de la Société par tout moyen de
            communication mis à sa disposition tel que le courrier électronique,
            le téléphone, etc.
          </dd>
          <dd>navigue sur le Site</dd>
          <dd>
            partage un bien avec un ami par envoi d’un e-mail et/ou facebook
          </dd>
          <dd>
            remplit un formulaire de contact d’informations ou de correspondance
            sur le Site
          </dd>
          <dt>
            Les données collectées sont nécessaires aux traitements suivants :
          </dt>
          <dd>
            Gestion et suivi des relations commerciales entre la Société et le
            client (notamment les opérations relatives à la recherche de biens à
            l’achat, à la recherche de biens à la vente, aux transactions
            immobilières, paiements et factures, aux réclamations, informations
            etc.).
          </dd>
          <dd>
            Envoi de prospection commerciale (voir paragraphe « Newsletters »
            ci-dessous)
          </dd>
          <dd>
            Personnalisation des contenus du Site, affichage de publicités
            ciblées notamment sur les réseaux sociaux.
          </dd>
          <dd>
            Partage d’informations avec nos partenaires en relation avec
            l’activité de la Société (sites /portails immobiliers, agences
            immobilières, réseaux d’agences, artisans, notaires, syndics,
            cabinet d’assurance, banque.), ci-après « les Partenaires ».
          </dd>
          <dd>
            Mise à disposition de boutons de partage vers les réseaux sociaux
          </dd>
          <dd>
            Réalisation de statistiques de la mesure d’audience et d’études
            marketing
          </dd>
          <dd>Prévention et lutte contre la fraude</dd>
          <dt>Création de compte, formulaires et questionnaires</dt>
          <dd>
            L’Utilisateur devra renseigner tous les champs du formulaire de
            création de compte, de saisie d’informations ou de correspondance
            sur le Site, à l’exception des champs affichés comme facultatifs
            c’est-à-dire non signalés par un astérisque. Les informations
            facultatives sont collectées par la Société et permettent de mieux
            connaître les Utilisateurs du Site.
          </dd>
          <dd>
            Tout défaut de réponse à un champ obligatoire ou l’absence d’accord
            sur la PPD aura pour conséquence que le formulaire ne sera pas
            envoyé à la Société.
          </dd>
          <dt>Destinataires des données</dt>
          <dd>
            Les données collectées sont destinées à l'usage de la Société. Les
            données peuvent être transmises à des Partenaires en relation avec
            l’activité de la Société, services de police ou de justice dans le
            cadre de réquisitions judiciaires.
          </dd>
          <dd>
            Les données peuvent également être traitées par des sous-traitants
            auxquels la Société fait appel dans le cadre de la création, la mise
            à jour, la maintenance, le stockage des bases de données, en vue de
            la réalisation des prestations de la Société, de la prévention et de
            la lutte contre la fraude.
          </dd>
        </dl>

        <h5>IV) Droit et protection de l’Utilisateur</h5>

        <dl>
          <dt>
            1) Droit d’accès, de rectification et de suppression des données ;
            droit d’opposition au traitement.
          </dt>
          <dd>
            L’Utilisateur dispose d'un droit d'accès, de rectification, et de
            suppression des données le concernant. L’utilisateur peut
            expressément s’opposer au traitement de ses données personnelles.
            Pour cela, il lui suffit d’écrire un courrier à la Société, 23 AV
            G.Clemenceau 34000 MONTPELLIER ou remplir le formulaire de
            correspondance en ligne.
          </dd>
          <dd>
            L’Utilisateur indique ses nom, prénom et adresse postale. Sa demande
            doit être signée et accompagnée d’une pièce d’identité en cours de
            validité portant sa signature. L’Utilisateur peut préciser l’adresse
            à laquelle doit lui parvenir la réponse.
          </dd>
          <dd>
            La Société dispose d’un délai de 1 mois à compter de la réception de
            la demande de l’Utilisateur pour y répondre. A l’issue de ce délai,
            le Client pourra saisir la CNIL en cas de réponse négative ou
            absence de réponse de la part de la Société.
          </dd>
          <dt>2) Portabilité des données</dt>
          <dt>
            L’Utilisateur dispose du droit à la portabilité des données
            personnelles traitées de manière automatisée qui lui confère :
          </dt>
          <dd>
            Le droit de recevoir ses données personnelles dans un format
            structuré
          </dd>
          <dd>
            Le droit d’obtenir que les données personnelles soient transmises
            directement d’un responsable de traitement à un autre sauf
            impossibilité technique.
          </dd>
          <dt>
            3) Transfert de données personnelles en dehors de l’Union européenne
          </dt>
          <dd>
            Les données personnelles sont stockées, hébergées et traitées sur le
            territoire de l’Union Européenne.
          </dd>
          <dt>4) Durée de conservation des données et droit à l’oubli</dt>
          <dt>
            4.1 La Société conserve les données pendant une durée de cinq années
            à compter de la fin des relations avec le client ou le prospect. Le
            délai commence à partir soit de la dernière transaction réalisée,
            soit de la dernière saisine d’une demande, ou du dernier appel au
            service client, ou de l’envoi d’un courriel au service client, ou
            d’un clic sur un lien hypertexte d’un courriel adressé par la
            Société, ou enfin d’une réponse positive à un courriel demandant si
            le client souhaite continuer à recevoir des informations ou alertes
            à l’échéance du délai de cinq ans.
          </dt>
          <dd>
            Néanmoins, les informations permettant d’établir la preuve d’un
            droit ou d’un contrat, ou conservées au titre du respect d’une
            obligation légale peuvent être archivées conformément aux
            dispositions et prescriptions légales en vigueur.
          </dd>
          <dd>
            A l’issue de ce délai, les données du client ou prospect seront
            totalement anonymisées ou détruites.
          </dd>
          <dt>
            4.2 Nonobstant ce qui précède, l’Utilisateur dispose du droit à
            l’oubli et à l’effacement des données personnelles traitées par la
            Société, sous réserve du droit de la Société à conserver certaines
            données au regard de sa responsabilité civile professionnelle, de
            ses obligations fiscales, et des prescriptions légales.
          </dt>
          <dd>
            L’Utilisateur doit notifier sa demande selon les mêmes formes
            prévues pour le droit d’accès ci-dessus.
          </dd>
          <dt>5) Sort des données personnelles après le décès</dt>
          <dd>
            La Société informe l’Utilisateur qu’il peut définir, de son vivant,
            des directives relatives à la conservation, à l’effacement et à la
            communication de ses données personnelles après son décès. Ces
            directives peuvent être générales ou particulières. L’Utilisateur
            peut modifier ou révoquer ses directives à tout moment. Pour ce
            faire, l’Utilisateur peut contacter la Société dans les mêmes
            conditions que pour le droit d’accès prévu ci-dessus.
          </dd>
          <dt>6) Fonctions spécifiques</dt>
          <dt>Newsletters de la Société - Alertes e-mail</dt>
          <dd>
            Lors de la création de son compte ou de son inscription et
            ultérieurement dans la gestion de ses préférences, ou en fonction du
            choix de certains services, l’Utilisateur peut s’inscrire à la
            newsletter de la Société ou aux alertes emails et ainsi choisir
            d’être informé à intervalle régulier des offres proposées. Il a, à
            tout moment, la possibilité de se désabonner en cliquant sur le lien
            prévu à cet effet situé en bas de chacune des newsletters.
          </dd>
          <dt>Sms / mms</dt>
          <dd>
            La Société peut utiliser le numéro de téléphone portable du client
            pour la communication des offres, demandes et alertes. À tout moment
            le client a la possibilité de s’y opposer de manière simple et
            gratuite, ou de se désinscrire des alertes, sur le Site dans la
            rubrique « Mon compte », ou via le formulaire de correspondance ou
            par courrier postal à l’adresse suivante : 23 AV G.Clemenceau 34000
            MONTPELLIER.
          </dd>
          <dt>Cookies</dt>
          <dd>
            Définition du cookie
            <ul>
              <li>
                Un cookie est un petit fichier texte qui est placé ou stocké sur
                votre terminal (ordinateur, tablette ou appareil mobile) lorsque
                vous visitez un site internet. Le cookie permet à un site de
                vous reconnaître, de vous aider à naviguer de page en page sur
                un site internet, fournit des connexions sécurisées et se
                souvient de vos préférences lors de vos prochaines visites.
              </li>
              <li>
                La Société a recours à l'utilisation de cookies afin de
                reconnaître l’Utilisateur (client ou non) lors de sa connexion
                sur le Site. Ils sont anonymisés et ne collectent ni ne
                conservent de données personnelles.
              </li>
            </ul>
          </dd>
          <dd>
            Suppression des cookies
            <ul>
              <li>
                L’Utilisateur peut à tout moment désactiver les cookies
                enregistrés sur son terminal. Pour cela, il lui suffit
                d’utiliser le bouton mis à sa disposition à cet effet dans la
                page mentions légales ou de sélectionner les paramètres
                appropriés dans son navigateur et consulter le menu d'aide de
                votre navigateur.
              </li>
              <li>
                Cependant, cette désactivation pourra avoir pour conséquence
                d'empêcher l'accès à certaines fonctionnalités du Site
                permettant de personnaliser les services proposés par la
                Société.
              </li>
            </ul>
          </dd>

          <dt>Balises Web</dt>
          <dd>
            La Société utilise des balises web sur certaines pages du Site qui
            permettent de compter le nombre de visiteurs de la page et de mettre
            à jour le site. Ces balises web peuvent être utilisées avec certains
            de nos partenaires, notamment afin de mesurer et améliorer
            l'efficacité de nos prestations. Les informations collectées via ces
            balises web sont anonymes et permettent de connaître la
            fréquentation de certaines pages du Site, et ce afin de mieux
            assister les Utilisateurs du Site.
          </dd>

          <dt>Plugins réseaux sociaux</dt>
          <dd>
            Le Site utilise des plugins réseaux sociaux tels que Facebook,
            Twitter (Ci-après « Réseaux Sociaux »). Par exemple, si
            l’Utilisateur est connecté à Facebook lors de sa navigation sur le
            Site, Facebook pourra directement relier sa visite à son compte
            utilisateur Facebook même si l’Utilisateur n’a pas utilisé le bouton
            de partage.
          </dd>
          <dd>
            Si l’Utilisateur interagit au moyen des plugins, par exemple en
            cliquant sur le bouton « J’aime » ou en laissant un commentaire, les
            informations correspondantes seront transmises et enregistrées sur
            un serveur de Facebook. Elles seront publiées sur le compte Facebook
            de l’Utilisateur.
          </dd>
          <dd>
            La Société ne gère pas les données collectées par les Réseaux
            Sociaux via les boutons. L’Utilisateur devra prendre connaissance de
            la politique relative à la protection des données personnelles
            publiée par les Réseaux Sociaux concernés et ce, afin de connaître
            les modalités de traitement et d’utilisation des données recueillies
            par ces derniers ainsi que les possibilités de paramétrages dont il
            dispose pour protéger sa vie privée.
          </dd>
          <dd>
            Si l’Utilisateur ne souhaite pas que le Réseau Social relie les
            informations collectées par l’intermédiaire de la Société à son
            compte utilisateur Réseau Social, il doit se déconnecter du Réseau
            Social avant de consulter le Site.
          </dd>

          <dt>
            Mesures de sécurité prises par la Société pour assurer la protection
            des données personnelles
          </dt>
          <dd>
            La Société met en œuvre tous les moyens techniques adaptés
            conformément aux règles de l’art, pour maintenir l’intégrité, la
            sécurité numérique et physique, la confidentialité des données et
            notamment empêcher qu’elles soient déformées, endommagées, ou que
            des tiers non autorisés y aient accès, notamment par la mise en
            place de cryptage, codes d’accès, firewall, anti-virus et tous
            autres moyens techniques adaptés.
          </dd>
        </dl>
        <p>La Société</p>

        <p>Mise en ligne le 22/05/2020</p>
      </article>
      <aside v-if="!scrolled" id="not-scrolled">
        <svg
          width="60"
          height="80"
          viewBox="0 0 60 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.6464 56.3536C28.8417 56.5488 29.1583 56.5488 29.3536 56.3536L32.5355 53.1716C32.7308 52.9763 32.7308 52.6597 32.5355 52.4645C32.3403 52.2692 32.0237 52.2692 31.8284 52.4645L29 55.2929L26.1716 52.4645C25.9763 52.2692 25.6597 52.2692 25.4645 52.4645C25.2692 52.6597 25.2692 52.9763 25.4645 53.1716L28.6464 56.3536ZM28.5 26L28.5 56L29.5 56L29.5 26L28.5 26Z"
            fill="#FCFCFC"
          />
          <rect
            x="0.5"
            y="0.5"
            width="59"
            height="79"
            rx="29.5"
            stroke="#FCFCFC"
          />
        </svg>
        <p>
          {{ $t('rgpd.btn1') }}
        </p>
      </aside>
      <aside v-else id="scrolled" @click="$emit('rgpd')">
        <p>
          {{ $t('rgpd.btn2') }} <span>{{ $t('rgpd.span') }}</span>
        </p>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5L11 4.5V3.5L0 3.5L0 4.5Z"
            fill="#FC5555"
          />
        </svg>
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    }
  },
  methods: {
    handleScroll() {
      const element = document.getElementById('law')
      if (
        element.scrollHeight - element.scrollTop <=
        element.clientHeight + 200
      ) {
        this.scrolled = true
      }
    },
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/layouts/rgpd.scss"></style>

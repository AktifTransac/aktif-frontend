<template>
  <div>
    <section id="contact" class="container">
      <h2>Formulaire de contact</h2>
      <form>
        <input
          v-model="name"
          type="text"
          placeholder="Quel est votre nom & prénom ?"
        />
        <input
          v-model="mail"
          type="mail"
          placeholder="Quel est votre adresse mail ?"
        />
        <input
          v-model="phone"
          type="tel"
          placeholder="Dites-nous votre numéro de téléphone ?"
        />
        <fieldset>
          <label>Votre type de requête ?</label>
          <select id="project-select" v-model="project" name="project">
            <option value="Achat de biens">Achat de biens</option>
            <option value="Location">Location</option>
            <option value="Gestion">Gestion</option>
            <option value="Autre">Autre</option>
          </select>
        </fieldset>
        <fieldset>
          <label for="infos">Message supplémentaire</label>
          <textarea v-model="infos" name="infos" rows="10"></textarea>
        </fieldset>

        <input type="submit" value="Envoyer" />
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      mail: '',
      phone: '',
      project: 'Achat de biens',
      infos: '',
    }
  },
}
</script>

<style
  scoped
  lang="scss"
  src="~/assets/styles/pages/Contact/Contact.scss"
></style>


const PORT = 8080

describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:' + PORT)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to next pokemon', function () {
    cy.visit('http://localhost:' + PORT)
    cy.contains('caterpie').click()
    cy.contains('Next').click()
    cy.contains('metapod')
    cy.contains('shed skin')

  })

})


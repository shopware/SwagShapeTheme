function changeColorScheme(colorScheme) {
    cy.intercept({
        path: `${Cypress.env('apiPath')}/_action/theme/*`,
        method: 'patch'
    }).as('saveData');

    cy.get('.sw-theme-list-item')
        .last()
        .get('.sw-theme-list-item__title')
        .contains('Shape Theme')
        .click();

    cy.get('.sw-colorpicker .sw-colorpicker__input')
        .first().clear()
        .typeAndCheck(colorScheme.primary);

    cy.get('.sw-card__title').contains('eCommerce')
        .parent('.sw-theme-manager-detail__area')
        .find('.sw-colorpicker__input')
        .first().clear().typeAndCheck(colorScheme.primary);

    cy.get('.smart-bar__actions .sw-button-process.sw-button--primary').click();
    cy.get('.sw-modal .sw-button--primary').click();

    cy.wait('@saveData').then((xhr) => {
        expect(xhr.response).to.have.property('statusCode', 200);
    });
}

export default {
    changeColorScheme: schema => changeColorScheme(schema)
}

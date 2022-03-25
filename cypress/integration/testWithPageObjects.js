/// <reference types="cypress" />


import { navigateTo, onNavigationPage } from "../support/page_objects/navigationPage";
import{ onFormLayoutsPage } from "../support/page_objects/formLayoutsPage";
import { onDatePickerPage } from "../support/page_objects/datepickerPage";

describe("Test with Page Objects", () => {

    beforeEach('open app', () => {
        cy.openHomePage()
    })

    it.skip("Verify Nav.", () => {
        
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
    navigateTo.formLayoutsPage()
    navigateTo.smartTablePage()
    navigateTo.toasterPage()
    navigateTo.tooltipPage()


    });

    it("submit inline.", () => {
        
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem','test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(2)

    
    
        });
});
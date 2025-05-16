import { render, screen } from '@testing-library/react';
import { TranslationProvider } from 'modules/translation/container/TranslationProvider';
import SelectLanguage from 'modules/translation/components/select-language/SelectLanguage';
import userEvent from '@testing-library/user-event';

describe(':: Modules', () => {

    beforeEach(() => {
        sessionStorage.clear();
    });

    describe(':: Translation', () => {

        describe('SelectLanguage component', () => {
            it('should render the Portuguese flag when the selected language is Portuguese', () => {
                sessionStorage.setItem('language', 'pt');

                render(
                    <TranslationProvider>
                        <SelectLanguage />
                    </TranslationProvider>
                );

                const imgElement = screen.getByAltText('Português');
                expect(imgElement).toBeInTheDocument();

                const selectElement = screen.getByRole('combobox');
                expect(selectElement).toBeInTheDocument();
            });

            it('should render the English flag when the selected language is English', () => {
                sessionStorage.setItem('language', 'en');

                render(
                    <TranslationProvider>
                        <SelectLanguage />
                    </TranslationProvider>
                );

                const imgElement = screen.getByAltText('English');
                expect(imgElement).toBeInTheDocument();

                const selectElement = screen.getByRole('combobox');
                expect(selectElement).toBeInTheDocument();
            });

            it('should render the Spanish flag when the selected language is Spanish', () => {
                sessionStorage.setItem('language', 'es');

                render(
                    <TranslationProvider>
                        <SelectLanguage />
                    </TranslationProvider>
                );

                const imgElement = screen.getByAltText('Spanish');
                expect(imgElement).toBeInTheDocument();

                const selectElement = screen.getByRole('combobox');
                expect(selectElement).toBeInTheDocument();
            });

            it('should display all language options when combobox is clicked and Portuguese is selected', () => {
                sessionStorage.setItem('language', 'pt');

                render(
                    <TranslationProvider>
                        <SelectLanguage />
                    </TranslationProvider>
                );

                const selectElement = screen.getByRole('combobox');
                expect(selectElement).toBeInTheDocument();

                userEvent.click(selectElement);

                const ptImg = screen.getAllByAltText('Português');
                const enImg = screen.getByAltText('English');
                const esImg = screen.getByAltText('Spanish');

                expect(ptImg).toHaveLength(2);
                expect(enImg).toBeInTheDocument();
                expect(esImg).toBeInTheDocument();
            });

            it('should display all language options when combobox is clicked and English is selected', () => {
                sessionStorage.setItem('language', 'en');

                render(
                    <TranslationProvider>
                        <SelectLanguage />
                    </TranslationProvider>
                );

                const selectElement = screen.getByRole('combobox');
                expect(selectElement).toBeInTheDocument();

                userEvent.click(selectElement);

                const ptImg = screen.getAllByAltText('English');
                const enImg = screen.getByAltText('Português');
                const esImg = screen.getByAltText('Spanish');

                expect(ptImg).toHaveLength(2);
                expect(enImg).toBeInTheDocument();
                expect(esImg).toBeInTheDocument();
            });

            it('should display all language options when combobox is clicked and Spanish is selected', () => {
                sessionStorage.setItem('language', 'es');

                render(
                    <TranslationProvider>
                        <SelectLanguage />
                    </TranslationProvider>
                );

                const selectElement = screen.getByRole('combobox');
                expect(selectElement).toBeInTheDocument();

                userEvent.click(selectElement);

                const ptImg = screen.getAllByAltText('Spanish');
                const enImg = screen.getByAltText('Português');
                const esImg = screen.getByAltText('English');

                expect(ptImg).toHaveLength(2);
                expect(enImg).toBeInTheDocument();
                expect(esImg).toBeInTheDocument();
            });
        });

    });

});

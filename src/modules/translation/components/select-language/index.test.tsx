import { render, screen } from '@testing-library/react';
import SelectLanguage from 'modules/translation/components/select-language';
import { TranslationProvider } from 'modules/translation/container';
import userEvent from '@testing-library/user-event';

describe('SelectLanguage tests', () => {

    beforeEach(() => {
        sessionStorage.clear();
    });

    describe('SelectLanguage render tests', () => {

        test('Português selected language render test', () => {
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
    
        test('English selected language render test', () => {
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
    
        test('Spanish selected language render test', () => {
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
    });

    describe('SelectLanguage click render tests', () => {

        test('SelectLanguage click when Português is on cache', () => {
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

        test('SelectLanguage click when English is on cache', () => {
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

        test('SelectLanguage click when Spanish is on cache', () => {
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

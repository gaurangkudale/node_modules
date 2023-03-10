/// <amd-module name="@angular/localize/src/tools/src/translate/translation_files/translation_parsers/xliff1_translation_parser" />
import { ParseAnalysis, ParsedTranslationBundle, TranslationParser } from './translation_parser';
import { XmlTranslationParserHint } from './translation_utils';
/**
 * A translation parser that can load XLIFF 1.2 files.
 *
 * http://docs.oasis-open.org/xliff/v1.2/os/xliff-core.html
 * http://docs.oasis-open.org/xliff/v1.2/xliff-profile-html/xliff-profile-html-1.2.html
 *
 * @see Xliff1TranslationSerializer
 */
export declare class Xliff1TranslationParser implements TranslationParser<XmlTranslationParserHint> {
    /**
     * @deprecated
     */
    canParse(filePath: string, contents: string): XmlTranslationParserHint | false;
    analyze(filePath: string, contents: string): ParseAnalysis<XmlTranslationParserHint>;
    parse(filePath: string, contents: string, hint?: XmlTranslationParserHint): ParsedTranslationBundle;
    private extractBundle;
    private extractBundleDeprecated;
}

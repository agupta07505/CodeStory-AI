export interface AIProvider {
    generate(code: string): Promise<string>;
}

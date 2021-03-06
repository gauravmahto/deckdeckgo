export interface DeckdeckgoExtra {
  lazyLoadContent(): Promise<void>;
}

export class DeckdeckgoExtraUtils {

  static lazyLoadContent(el: HTMLElement, tag: string): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const promises = [];

      const elements: HTMLElement[] = this.getAllElements(el, tag);

      if (elements && elements.length > 0) {

        elements.forEach((element: HTMLElement) => {
          promises.push((element as any).lazyLoadContent());
        });

        await Promise.all(promises);

        resolve();
      }

      resolve();
    });
  }

  private static getAllElements(el: HTMLElement, tag: string): HTMLElement[] {
    const allSlottedElements: NodeListOf<HTMLElement> = el.querySelectorAll(tag);
    const allShadowsElements: NodeListOf<HTMLElement> = el.shadowRoot.querySelectorAll(tag);

    return Array.from(allSlottedElements).concat(Array.from(allShadowsElements));
  }

}

export default function scrollTo(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView()
}
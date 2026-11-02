import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { Contact, validateContact } from "../components/Contact";
import { projects } from "../data/projects";

describe("Portfolio", () => {
  it("renders the name and one card per project", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Aida Kordi" })).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
  });

  it("opens and closes a project's full story", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /full story: pull request review automation/i }));
    const dialog = screen.getByRole("dialog", { hidden: true });
    expect(within(dialog).getByText("What I built")).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: /close project details/i }));
    expect(dialog).not.toHaveAttribute("open");
  });
});

describe("Contact form", () => {
  it("validates required fields and email format", () => {
    expect(validateContact({ name: "", email: "", message: "" })).toMatch(/fill in/);
    expect(validateContact({ name: "A", email: "nope", message: "Hi" })).toMatch(/valid email/);
    expect(validateContact({ name: "A", email: "a@b.co", message: "Hi" })).toBeNull();
  });

  it("sends the message and shows a confirmation", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<Contact endpoint="https://formspree.io/f/test" />);

    await user.type(screen.getByLabelText("Your name"), "Jane");
    await user.type(screen.getByLabelText("Your email"), "jane@company.com");
    await user.type(screen.getByLabelText("Message"), "Let's talk");
    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(await screen.findByText(/your message was sent/i)).toBeInTheDocument();
    vi.unstubAllGlobals();
  });
});

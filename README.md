
<img width="1024" height="1024" alt="FALK" src="https://github.com/user-attachments/assets/085f8875-9173-4895-bde2-83e721831424" />
---

# 📑 Estrutura geral

* **Tipo de componente**: `React.FC` (React Functional Component).
* **Localização**: `frontend/src/app/[locale]/login/page.tsx`.
* **Recursos usados**:

  * **React Hooks** → `useState` para estados locais.
  * **Zod** → validação de formulário.
  * **Next-intl** → tradução com `useTranslations`.
  * **NextAuth** → login com credenciais e provedores sociais.
  * **nookies** (cookies) → importado mas não usado nesse trecho.
  * **TailwindCSS** → estilização dos elementos.
  * **Imagens** → ícones SVG para campos e botões sociais.

---

# 🔑 Estados principais

* `formData`: guarda os valores (`email`, `password`, `confirmPassword`).
* `errors`: mensagens de erro de validação.
* `showPassword`: controla exibição/ocultação da senha.
* `activeTab`: define se está na aba **login** ou **register**.
* `t`: função de tradução (ex: `t("emailInvalid")`).

---

# 📋 Validação com Zod

O schema (`schema`) exige:

* `email` válido.
* `password` com:

  * Mínimo 8 caracteres,
  * Letra maiúscula,
  * Letra minúscula,
  * Número,
  * Símbolo especial.
* `confirmPassword` → deve ser igual à senha.

Se falhar, os erros são salvos em `errors` e exibidos no formulário.

---

# 🖊️ Funções principais

* **`handleTogglePassword`**: alterna `showPassword` (exibir ou esconder senha).
* **`handleChange`**: atualiza `formData` conforme digita.
* **`handleSubmit`**:

  1. Previne refresh da página.
  2. Valida os dados com Zod.
  3. Se válido:

     * Se estiver na aba `login`, chama `signIn("credentials")` do NextAuth.
     * Se der erro, mostra `"Email ou senha inválidos"`.
     * Se sucesso, loga o usuário.

---

# 🖼️ Renderização da tela

1. **Container principal** → fundo escuro (`bg-[#111111]`) centralizado.
2. **Caixa do formulário** → borda arredondada, sombra, fundo cinza escuro.
3. **Tabs**: "login" e "register", com destaque roxo na aba ativa.
4. **Formulário**:

   * Campo email (ícone envelope).
   * Campo senha (ícone cadeado + botão olho para alternar visibilidade).
   * Campo confirmar senha (somente no modo register).
   * Checkbox:

     * `login`: “Remember me”.
     * `register`: aceitar termos e política.
   * Botão roxo de submit → exibe `Login` ou `Register` conforme aba.
5. **Separador "or"** → linha horizontal com texto central.
6. **Login social** → botões com ícones:

   * Google
   * Facebook
   * Discord

---

# ⚙️ Fluxo esperado

1. Usuário escolhe aba (**login** ou **register**).
2. Preenche email/senha (+ confirmar senha em registro).
3. Código valida → mostra erros em vermelho caso inválido.
4. Se login → tenta autenticar via **NextAuth credentials**.
   Se registro → por enquanto só valida, mas poderia ser integrado com API.
5. Alternativamente, pode logar via Google, Facebook ou Discord (NextAuth providers).

---

👉 Em resumo:
Esse código é um **formulário completo de login/registro** com **validação forte de senha**, **tradução**, **estilização moderna em dark mode** e **login social integrado** via NextAuth.

---



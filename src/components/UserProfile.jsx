function UserProfile({ email, onLogout }) {
  return (
    <section className="profile-card" aria-labelledby="profile-title">
      <div>
        <p className="eyebrow">Prisijungęs naudotojas</p>
        <h2 id="profile-title">Sveiki sugrįžę</h2>
        <p className="profile-email">{email}</p>
      </div>
      <button type="button" className="back-button" onClick={onLogout}>
        Atsijungti
      </button>
    </section>
  )
}

export default UserProfile

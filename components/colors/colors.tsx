const Colors = () => {
  const colors = [
    {
      name: 'bg-primary-hover text-on-primary-hover',
      text: 'Primary::Hover',
    },
    {
      name: 'bg-primary-default text-on-primary-default',
      text: 'Primary::Default',
    },
    {
      name: 'bg-primary-active text-on-primary-active',
      text: 'Primary::Active',
    },
    {
      name: 'bg-primary-focus text-on-primary-focus',
      text: 'Primary::Focus',
    },
    {
      name: 'bg-secondary-hover text-on-secondary-hover',
      text: 'Secondary::Hover',
    },
    {
      name: 'bg-secondary-default text-on-secondary-default',
      text: 'Secondary::Default',
    },
    {
      name: 'bg-secondary-active text-on-secondary-active',
      text: 'Secondary::Active',
    },
    {
      name: 'bg-secondary-focus text-on-secondary-focus',
      text: 'Secondary::Focus',
    },

    {
      name: 'bg-tertiary-hover text-on-tertiary-hover',
      text: 'Tertiary::Hover',
    },
    {
      name: 'bg-tertiary-default text-on-tertiary-default',
      text: 'Tertiary::Default',
    },
    {
      name: 'bg-tertiary-active text-on-tertiary-active',
      text: 'Tertiary::Active',
    },
    {
      name: 'bg-tertiary-focus text-on-tertiary-focus',
      text: 'Tertiary::Focus',
    },

    {
      name: 'bg-accentA-hover text-on-accentA-hover',
      text: 'AccentA::Hover',
    },
    {
      name: 'bg-accentA-default text-on-accentA-default',
      text: 'AccentA::Default',
    },
    {
      name: 'bg-accentA-active text-on-accentA-active',
      text: 'AccentA::Active',
    },
    {
      name: 'bg-accentA-focus text-on-accentA-focus',
      text: 'AccentA::Focus',
    },

    {
      name: 'bg-accentB-hover text-on-accentB-hover',
      text: 'AccentB::Hover',
    },
    {
      name: 'bg-accentB-default text-on-accentB-default',
      text: 'AccentB::Default',
    },
    {
      name: 'bg-accentB-active text-on-accentB-active',
      text: 'AccentB::Active',
    },
    {
      name: 'bg-accentB-focus text-on-accentB-focus',
      text: 'AccentB::Focus',
    },
  ];

  return (
    <div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Colors:
      </h2>

      <ul className="grid grid-cols-4 gap-1">
        {colors.map((c) => (
          <li key={c.text} className={`shadow-sm p-12 ${c.name}`}>
            <p className={c.name}>{c.text} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Colors };

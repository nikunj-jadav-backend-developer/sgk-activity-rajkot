CREATE TABLE global_options (
    id BIGSERIAL PRIMARY KEY,

    option_key VARCHAR(100) NOT NULL UNIQUE,
    option_value TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
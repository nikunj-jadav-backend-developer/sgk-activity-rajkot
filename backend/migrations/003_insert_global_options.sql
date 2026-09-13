INSERT INTO global_options (option_key, option_value)
VALUES
    ('site_name', 'SGK Activity Rajkot'),
    ('site_email', 'sgkactivitygroup@gmail.com'),
    ('site_phone', '+91 98795 29585'),
    ('site_address', 'Rajkot, Gujarat'),
    ('whatsapp_number', '+919879529585')
ON CONFLICT (option_key)
DO NOTHING;